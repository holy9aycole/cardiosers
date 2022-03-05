import axios from "axios";
import { useCallback, useEffect } from "react";
import { getForumSuccess, updateComments } from "redux/slices/forum";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { cloneDeep } from "lodash";

export default function useForum() {
  const dispatch = useDispatch();
  const { forum } = useSelector((state) => state.forum);
  const { id } = useParams();

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

  const postComment = useCallback(async (data) => {
    data.users_permissions_user = 1;

    const response = await axios.post("http://52.172.227.233/comments", data);

    //  Modifying users_permission_user according to schema
    const idUser = response.data.users_permissions_user.id;
    response.data.users_permissions_user = idUser;

    //  Cloning the required object out of forum array
    const cloned = cloneDeep(
      forum.find((item) => item.id === parseInt(id, 10))
    );

    // Pushing the comment to the particular forum
    cloned.comments.push(response.data);

    //  Updating the particular forum object
    await axios.put(`http://52.172.227.233/forums/${id}`, cloned);

    //  Dispatching the action to update the comments in redux
    dispatch(updateComments(cloned));
  }, []);

  return { forum, postForum, postComment, getForum };
}
