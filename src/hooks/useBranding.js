import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandingSuccess } from 'redux/slices/branding';

export default function useBranding() {
    const dispatch = useDispatch();
    const { branding } = useSelector((state) => state.branding)

    useEffect(() => {
        getBranding();
    }, []);

    const getBranding = useCallback(async () => {
        const response = await axios.get('http://52.172.227.233/brandings');
        if (response)
            dispatch(getBrandingSuccess(response.data))
    }, []);

    return {
        branding
    }
}