import { useState, useEffect } from "react";
import getTotal from "../utils/getTotal";

export const useGetTotal = (array) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotal(array));
  }, [array]);

  return { total };
};
