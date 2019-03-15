import {useEffect, useState} from 'react';
import Axios from 'axios';

export const useLogin = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        Axios.get('http://localhost:8080/auth/profile', { 'withCredentials': true })
            .then((res) => {
                if (res.data === 'Login required.') {
                    setUser(undefined);
                } else {
                    setUser(res.data);
                }
            });
    }, []);

    return user;
};

export default useLogin;