import React, {createContext, useContext, useEffect, useState} from 'react';
import Axios from 'axios';

const defaultValue = {
    user: {
        uuid: '',
        vendor: '',
        email: '',
        nickname: '',
        profile: '',
        isBanned: false,
        isMuted: false,
        isAdmin: false
    }
};
const context = createContext(defaultValue);


export const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        Axios.get('http://localhost:8080/auth/profile', {'withCredentials': true})
            .then((res) => {
                if (res.data !== 'Login required.') setUser(res.data);
            })
            .catch((error => {
                console.log('유저 정보를 불러오지 못했습니다. ' + error);
            }));
    }, []);

    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
};

export const useUser = () => {
    const user = useContext(context);
    return user;
};