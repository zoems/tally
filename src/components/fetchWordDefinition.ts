import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const BASE_URL =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json";

export const fetchWordDefinition = async (word: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${word}?key=${apiKey}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching word definition:", error);
    throw error;
  }
};
