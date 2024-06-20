import { useEffect, useState } from "react";
import { successToaster } from "../helpers/toasterConfiguration.js";

const useGetData = (fn: any) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      console.log(error);
      successToaster(typeof error === "string" ? error : JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};

export default useGetData;
