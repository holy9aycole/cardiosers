import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySuccess } from "redux/slices/category";

export default function useCategory() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = useCallback(async () => {
    const response = await axios.get("http://52.172.227.233/categories");
    if (response) dispatch(getCategorySuccess(response.data));
  }, []);

  return {
    category,
  };
}
