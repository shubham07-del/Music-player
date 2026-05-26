import axios from "axios";

export const searchSongs = async (query) => {
  try {
    const response = await axios.get(
      `/api/search?term=${query}&media=music&limit=20`
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};