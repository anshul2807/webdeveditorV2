import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://webdeveditor-backend-git-705615852872.asia-south2.run.app/api',
  baseURL: 'https://webdeveditor-backend-203412458873.us-central1.run.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;