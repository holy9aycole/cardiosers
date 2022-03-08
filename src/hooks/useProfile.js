import axios from "axios";
import { useCallback, useEffect } from "react";
import { getProfileDetails, updateProfileDetails } from "redux/slices/profile";
import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";

export default function useProfile() {
  const dispatch = useDispatch();
  const { profile, pulled } = useSelector((state) => state.profile);
  const userId = 1;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = useCallback(async () => {
    if (pulled) return;
    const response = await axios.get(`http://52.172.227.233/users/${userId}`);
    if (response) dispatch(getProfileDetails(response.data));
  }, []);

  const updateUser = useCallback(async (data) => {
    const clone = cloneDeep(profile);
    clone.name = data.name;
    clone.email = data.email;
    clone.mobileNo = data.mobileNo;
    clone.city = data.city;

    const response = await axios.put(
      `http://52.172.227.233/users/${userId}`,
      clone
    );

    if (response) dispatch(updateProfileDetails(clone));
  }, []);

  return { getUser, profile, updateUser };
}
