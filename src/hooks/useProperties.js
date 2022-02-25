import axios from "axios";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPropertiesSuccess } from "redux/slices/properties";

export default function useProperties() {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = useCallback(async () => {
    const response = await axios.get("http://52.172.227.233/properties");
    if (response) dispatch(getPropertiesSuccess(response.data));
  }, []);

  return {
    properties,
  };
}
