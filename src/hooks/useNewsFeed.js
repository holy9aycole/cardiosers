import axios from "axios";
import { useCallback, useEffect } from "react";
import { getNewsFeedSuccess } from "redux/slices/newsFeed";
import { useSelector, useDispatch } from "react-redux";

export default function useGallery() {
  const dispatch = useDispatch();
  const { newsFeed, pulled } = useSelector((state) => state.newsFeed);

  useEffect(() => {
    getNewsFeed();
  }, []);

  const getNewsFeed = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get("http://52.172.227.233/news-feeds");
    if (response) dispatch(getNewsFeedSuccess(response.data));
  }, []);

  return { newsFeed, getNewsFeed };
}
