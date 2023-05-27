import { array } from "prop-types";
import { useState, useEffect } from "react";
import getQuantity from "../utils/getQuantity";

export const useGetQuantity = (array) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getQuantity(array));
  }, [array]);

  return { count };
};
