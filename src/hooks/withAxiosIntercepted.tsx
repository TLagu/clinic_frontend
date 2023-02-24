import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "constants/constants";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const authorizedApi = axios.create();

export function withAxiosIntercepted<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  const isTokenExpired = () => {
    try {
      const jwtToken = localStorage.getItem(ACCESS_TOKEN);
      if (!jwtToken) {
        return true;
      }
      const decoded = jwt_decode(jwtToken) as any;
      const tokenExp = decoded.exp as number;
      const currentTimestamp = Math.round(Date.now() / 1000);
      return tokenExp <= currentTimestamp;
    } catch (error) {
      return true;
    }
  };

  return function AxiosIntercepted(props: T) {
    const navigate = useNavigate();
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
      axios.interceptors.request.use((config: AxiosRequestConfig) => {
        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.request.use((config: AxiosRequestConfig) => {
        const controller = new AbortController();
        if (config?.headers) {
          if (localStorage.getItem(ACCESS_TOKEN) && isTokenExpired()) {
            controller.abort();
            localStorage.removeItem(ACCESS_TOKEN);
            navigate("/login");
          }
          config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            ACCESS_TOKEN
          )}`;
        }

        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
          signal: controller.signal,
        };
      });

      axios.interceptors.response.use(
        function (config) {
          return {
            ...config,
            baseURL: process.env.REACT_APP_API_URL,
          };
        },
        function (error) {
          if (error.response.status === 401) {
            navigate("/login");
          }
          return Promise.reject(error);
        }
      );

      authorizedApi.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            navigate("/login");
          }
          navigate("/login");
          return Promise.reject(error);
        }
      );

      setIsInitialized(true);
    }, [navigate]);

    return isInitialized ? <Component {...props} /> : <></>;
  };
}
