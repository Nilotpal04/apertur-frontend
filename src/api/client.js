import axios from "axios";
import useAuthStore from "../store/auth.store";
import { configs } from "eslint-plugin-react-hooks";

const client = axios.create({
  baseURL: "http://localhost:8000"
});

client.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if(token){
      config.headers.Authorization =
          `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default client;