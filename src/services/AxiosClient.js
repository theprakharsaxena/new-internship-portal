import axios from "axios";

const AxiosClient = axios.create();

AxiosClient.defaults.baseURL = "https://internship-43hq.onrender.com";

AxiosClient.defaults.headers = {
  "Content-Type": "application/json",
};

AxiosClient.defaults.withCredentials = true;

export default AxiosClient;
