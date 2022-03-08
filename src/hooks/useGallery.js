import axios from "axios";
import { useCallback, useEffect } from "react";
import { getGallerySuccess } from "redux/slices/gallery";
import { useSelector, useDispatch } from "react-redux";

export default function useGallery() {
  const dispatch = useDispatch();
  const { gallery, pulled } = useSelector((state) => state.gallery);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get("http://52.172.227.233/galleries");
    if (response) dispatch(getGallerySuccess(response.data));
  }, []);

  return { gallery };
}
