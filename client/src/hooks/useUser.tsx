import React, { createContext, useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import config from '../config';

export interface UserDataType {
    readonly uuid: string;
    readonly vendor: string;
    readonly email: string;
    readonly nickname: string;
    readonly profile: string;
    readonly isMuted: boolean;
    readonly mute_exp_date: number;
    readonly isAdmin: boolean;
}

const context = createContext<UserDataType>({} as UserDataType);

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserDataType>();

    useEffect(() => {
        Axios.get(`${config.endpointAPI}/auth/profile`, { 'withCredentials': true })
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((error => console.log('유저 정보를 불러오지 못했습니다. ' + error)));
    }, []);

    return (
        <context.Provider value={user!}>
            {children}
        </context.Provider>
    );
};

export const useUser = () => useContext(context);
