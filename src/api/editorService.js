import axiosInstance from './axiosInstance';

export const saveProject = async (files) => {
  try {
    const response = await axiosInstance.post('/share', { files });
    return response.data; // Expected: { shareId: "abc-123" }
  } catch (error) {
    throw error.response?.data || "Error saving project";
  }
};

export const getProject = async (id) => {
  try {
    const response = await axiosInstance.get(`/project/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error fetching project";
  }
};