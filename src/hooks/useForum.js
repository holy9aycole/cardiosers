import axios from "axios";
import { useCallback, useEffect } from "react";
import { getForumSuccess } from "redux/slices/forum";
import { useSelector, useDispatch } from "react-redux";

export default function useForum() {
  const dispatch = useDispatch();
  const { forum } = useSelector((state) => state.forum);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = useCallback(async () => {
    const response = await axios.get("http://52.172.227.233/forums");
    if (response) dispatch(getForumSuccess(response.data));
  }, []);

  return { forum };
}
