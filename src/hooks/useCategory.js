import axios from 'utils/axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorySuccess } from 'redux/slices/category';

export default function useCategory() {
  const dispatch = useDispatch();
  const { category, pulled } = useSelector((state) => state.category);

  useEffect(() => {
    // getCategory();
  }, []);

  const getCategory = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get('/categories');
    if (response) dispatch(getCategorySuccess(response));
  }, []);

  return {
    category,
  };
}
