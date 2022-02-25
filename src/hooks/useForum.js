import axios from "axios";
import { useCallback, useEffect } from "react";
import { getForumSuccess } from "redux/slices/forum";
import { useSelector, useDispatch } from "react-redux";

export default function useForum() {
  const dispatch = useDispatch();
  const { forum } = useSelector((state) => state.forum);
  // const { user } = useSelector((state) => state.user);
  useEffect(() => {
    getForum();
  }, []);

  const getForum = useCallback(async () => {
    const response = await axios.get("http://52.172.227.233/forums");
    if (response) dispatch(getForumSuccess(response.data));
  }, []);

  const postForum = useCallback(async (data) => {
    data.users_permissions_user = 1;
    const response = await axios.post("http://52.172.227.233/forums", data);
    // if (response) dispatch(getForumSuccess(response.data));
    console.log("response forum", response);
  }, []);

  const postComment = useCallback(async (data, id) => {
    data.users_permissions_user = 1;
    const response = await axios.post("http://52.172.227.233/comments", data);
    // if (response) dispatch(getForumSuccess(response.data));
    console.log("response comment", response);

    const response1 = await axios.put(
      `http://52.172.227.233/forums/${id}`,
      response.data
    );
    console.log("response put", response1);
  }, []);

  return { forum, postForum, postComment };
}
