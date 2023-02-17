import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "constants/constants";
import { useNavigate } from "react-router-dom";

// pokazać najpierw na dwóch komponentach z route i console logu w useEffect - kompozycja pozwalająca przekształcić komponent
// w inny komponent, reużywać logiki

export const authorizedApi = axios.create();

export function withAxiosIntercepted<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  // const isTokenExpired = () => {
  //   let token = localStorage.getItem(ACCESS_TOKEN);
  //   const decoded = jwt_decode<JwtPayload>(token ? token : "");
  //   return decoded.iat && decoded.iat > Date.now() ? true : false;
  //   //if (decoded && localStorage.setItem(ACCESS_TOKEN, "");
  // };

  return function AxiosIntercepted(props: T) {
    const navigate = useNavigate();
    // const tokenExpired = isTokenExpired();
    // isTokenExpired();
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
      axios.interceptors.request.use((config: AxiosRequestConfig) => {
        console.log("request - without authorization");
        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.request.use((config: AxiosRequestConfig) => {
        if (config?.headers) {
          config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            ACCESS_TOKEN
          )}`;
        }

        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
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

// export const unauthorizedApi = axios.create();
