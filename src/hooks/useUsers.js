import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com",
})

export function useUsers(url, options) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    api.get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching };
}