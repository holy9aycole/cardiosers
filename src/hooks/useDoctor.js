import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'utils/axios';
import useAuth from 'hooks/useAuth';

export const usePatients = () =>
  useQuery(['patients'], () => axios.get(`/api/patients`, { params: {} }), {
    select: (data) => data.data,
  });

export const useAddPatient = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation((data) => axios.post(`/api/patients`, { data: { ...data, doctor: user.user.id } }), {
    onSettled: () => queryClient.invalidateQueries('patients'),
  });
};

export const useScans = () =>
  useQuery(['scans'], () => axios.get(`/api/scans`, { params: { populate: ['patient', 'image'] } }), {
    select: (data) => data.data,
  });

export const useAddScan = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation((data) => axios.post(`/api/scans`, { data }), {
    onSettled: () => queryClient.invalidateQueries('scans'),
  });
};
