import axios from "axios";

export const getAllItemsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/items`
  );
  return response.data;
};

export const getAllItemsByUserApi = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/users/${id}/items`
  );
  return response.data;
};

export const addPostApi = async (postData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/users/${postData.userId}/items`,
    postData
  );
  return response;
};

export const searchApi = async (searchParams) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/items/search`,
    {
      params: { title: searchParams },
    }
  );
  return response.data;
};

export const markFoundApi = async (id) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/items/${id}/mark_found`
  );
  return response.data.item;
};

export const addUser = (name, email) => {
  const requestBody = { name: name, email: email };
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/users`, requestBody)
    .then((response) => {
      return response.data[0];
    });
};
