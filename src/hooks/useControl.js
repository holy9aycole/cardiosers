import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux
import {
  showSnackbar as _showSnackbar,
  hideSnackbar as _hideSnackbar,
  startLoading as _startLoading,
  stopLoading as _stopLoading
} from '../redux/slices/control';

// ----------------------------------------------------------------------

export default function useSettings() {
  const dispatch = useDispatch();
  const { snack, loading } = useSelector((state) => state.control);

  const showSnackbar = useCallback(
    (text, type = 'success') => dispatch(_showSnackbar(text, type)),
    [dispatch]
  );

  const hideSnackbar = useCallback(() => dispatch(_hideSnackbar()), [dispatch]);

  const startLoading = useCallback(() => dispatch(_startLoading()), [dispatch]);

  const stopLoading = useCallback(() => dispatch(_stopLoading()), [dispatch]);

  return {
    snack,
    loading,
    showSnackbar,
    hideSnackbar,
    startLoading,
    stopLoading
  };
}
