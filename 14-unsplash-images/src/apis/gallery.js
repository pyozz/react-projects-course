import axios from "axios";

export const getPhotos = async (searchValue) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_API_KEY
    }&query=${searchValue}`
  );
  return response.data;
};
