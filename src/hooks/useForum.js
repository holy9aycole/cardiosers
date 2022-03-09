import axios from "utils/axios";
import { useCallback, useEffect } from "react";
import {
  getForumSuccess,
  updateComments,
  deleteForumUpdate,
} from "redux/slices/forum";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { cloneDeep } from "lodash";

export default function useForum() {
  const dispatch = useDispatch();
  const { forum, pulled } = useSelector((state) => state.forum);
  const { id } = useParams();

  useEffect(() => {
    getForum();
  }, []);

  const getForum = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get("/forums");
    if (response) dispatch(getForumSuccess(response));
  }, []);

  const postForum = useCallback(async (data) => {
    data.users_permissions_user = 1;
    const response = await axios.post("/forums", data);
    // if (response) dispatch(getForumSuccess(response));
    console.log("response forum", response);
  }, []);

  const deleteForum = useCallback(async (id) => {
    const response = await axios.delete(`/forums/${id}`);
    console.log("response after delete", response);
    if (response) dispatch(deleteForumUpdate(response));
  }, []);

  const postComment = useCallback(async (data) => {
    data.users_permissions_user = 1;

    const response = await axios.post("/comments", data);

    //  Modifying users_permission_user according to schema
    const idUser = response.users_permissions_user.id;
    response.users_permissions_user = idUser;

    //  Cloning the required object out of forum array
    const cloned = cloneDeep(
      forum.find((item) => item.id === parseInt(id, 10))
    );

    // Pushing the comment to the particular forum
    cloned.comments.push(response);

    //  Updating the particular forum object
    await axios.put(`/forums/${id}`, cloned);

    //  Dispatching the action to update the comments in redux
    dispatch(updateComments(cloned));
  }, []);

  return { forum, postForum, postComment, getForum, deleteForum };
}
