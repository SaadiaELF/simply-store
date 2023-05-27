import { array } from "prop-types";
import { useState, useEffect } from "react";
import getTotal from "../utils/getTotal";

export const useGetTotal = (array) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getTotal(array));
  }, [array]);

  return { count };
};
