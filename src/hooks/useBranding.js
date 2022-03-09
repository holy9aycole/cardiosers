import axios from "utils/axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrandingSuccess } from "redux/slices/branding";

export default function useBranding() {
  const dispatch = useDispatch();
  const { branding, pulled } = useSelector((state) => state.branding);

  useEffect(() => {
    getBranding();
  }, []);

  const getBranding = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get("/brandings");
    if (response) dispatch(getBrandingSuccess(response));
  }, []);

  return {
    branding,
  };
}
