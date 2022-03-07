import axios from 'utils/axios';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPropertiesSuccess } from 'redux/slices/properties';

export default function useProperties() {
  const dispatch = useDispatch();
  const { properties, pulled } = useSelector((state) => state.properties);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get('/properties');
    if (response) dispatch(getPropertiesSuccess(response));
  }, []);

  return {
    properties,
  };
}
