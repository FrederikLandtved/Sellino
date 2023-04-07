import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseApi = 'http://192.168.87.66:5000';

const axiosInstance = axios.create({
  baseURL: baseApi,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("userToken");
    if (token !== '') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add token interceptor in this function
export const authorizedPost = async(apiResource, body) => {
  if (!apiResource) {
    return console.log("Please add an API resource to the endpoint.");
  }

  return axiosInstance
    .post(baseApi + '/' + apiResource, body)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export const unauthorizedPost = (apiResource, body) => {
  if (!apiResource) {
    return console.log("Please add an API resource to the endpoint.");
  }
  
  return axios
    .post(baseApi + '/' + apiResource, body)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export const authorizedGet = async (apiResource) => {
  try {
    return await axiosInstance
    .get(apiResource)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  } catch (error) {
    console.log(error);
  }
}