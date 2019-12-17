import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL
});


instance.interceptors.response.use((response)=>{
  return response
},
(error)=>{  
  return Promise.reject(error)
}
)
export default instance;
