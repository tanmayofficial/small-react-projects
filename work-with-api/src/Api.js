import axios from "axios";
import { hostId } from "./host";
import { url } from "./url";

const BASE_URL = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  url: `${url}`,
  params: {
    q: `bollywood`,
    type: "multi",
    offset: "0",
    limit: "10",
    numberOfTopResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": `${BASE_URL}`,
    "X-RapidAPI-Host": `${hostId}`,
  },
};

export async function fetchApi(data) {
  return await axios.request(options, data);
}
