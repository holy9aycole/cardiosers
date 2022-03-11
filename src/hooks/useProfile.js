import axios from "utils/axios";
import { useCallback, useEffect } from "react";
import { getProfileDetails } from "redux/slices/profile";
import { updateUserDetails } from "redux/slices/authJwt";
import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";

export default function useProfile() {
  const dispatch = useDispatch();
  const { profile, pulled } = useSelector((state) => state.profile);
  const { user, isAuthenticated } = useSelector((state) => state.authJwt);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get(`/users/${user.id}`);
    if (response) dispatch(getProfileDetails(response));
  }, []);

  const updateUser = useCallback(async (data) => {
    const clone = cloneDeep(user);
    clone.name = data.name;
    clone.email = data.email;
    clone.mobileNo = data.mobileNo;
    clone.city = data.city;
    if (isAuthenticated) {
      const response = await axios.put(`/users/${user.id}`, clone);
      if (response) dispatch(updateUserDetails(clone));
    }
  }, []);

  return { getUser, profile, updateUser };
}
