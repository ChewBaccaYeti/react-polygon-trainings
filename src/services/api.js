import axios from 'axios';

axios.defaults.baseURL = 'https://64f77a149d77540849539f7e.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
