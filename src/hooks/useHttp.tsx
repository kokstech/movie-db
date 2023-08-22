import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useHttp = (url: string) => {
  const [db, setDb] = useState<any>([]);

  const getItem = useCallback(
    function () {
      axios.get(url).then((res) => {
        setDb(res.data);
      });
    },
    [url]
  );

  function postDbItem(inputName: string) {
    try {
      axios
        .post(url, {
          name: inputName,
        })
        .then(() => {
          setTimeout(() => {
            getItem();
          }, 500);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function deleteItemHandler(id: string) {
    try {
      axios.delete(`${url}/${id}`).then(() => {
        getItem();
      });
    } catch (error) {
      console.log(error);
    }
  }

  function changeItemNameHandler(id: string, newName: string | null) {
    try {
      axios
        .put(`${url}/${id}`, {
          name: newName,
        })
        .then(() => {
          getItem();
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItem();
  }, [getItem]);

  return [db, postDbItem, deleteItemHandler, changeItemNameHandler];
};

export default useHttp;
