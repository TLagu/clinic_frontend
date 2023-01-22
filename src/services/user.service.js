import axios from "axios";

const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getPatientBoard = () => {
  return axios.get(API_URL + "patient");
};

const getSecretaryBoard = () => {
  return axios.get(API_URL + "secretary");
};

const getDoctorBoard = () => {
  return axios.get(API_URL + "doctor");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getPatientBoard,
  getSecretaryBoard,
  getDoctorBoard,
  getAdminBoard,
};

export default UserService;
