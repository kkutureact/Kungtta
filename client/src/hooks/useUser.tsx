import React, {createContext, useContext, useEffect, useState} from 'react';
import Axios from 'axios';

interface UserData {
    readonly uuid: string;
    readonly vendor: string;
    readonly email: string;
    readonly nickname: string;
    readonly profile: string;
    readonly isBanned: boolean;
    readonly isMuted: boolean;
    readonly isAdmin: boolean;
}

const context = createContext<UserData | undefined>(undefined);

export const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<UserData | undefined>(undefined);

    useEffect(() => {
        Axios.get('http://localhost:8080/auth/profile', {'withCredentials': true})
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((error => {
                if (error.response.status === 401) {
                    const guest = {
                        uuid: '게스트UUID',
                        vendor: 'guest',
                        email: '',
                        nickname: 'GUEST-RANDOM',
                        profile: '',
                        isBanned: false,
                        isMuted: false,
                        isAdmin: false,
                    };
                    
                    console.log('GUEST 로그인');
                    setUser(guest);
                    return;
                }

                console.log('유저 정보를 불러오지 못했습니다. ' + error);
                setUser(undefined);
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