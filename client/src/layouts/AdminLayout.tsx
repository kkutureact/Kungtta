import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import styled from 'styled-components';
import AdminSidebar from '../components/Admin/AdminSidebar';
import ColorBackground from '../utils/ColorBackground';
import { useUser } from '../hooks/useUser';

const WrapperStyle = styled.div`
    display: flex;

    @media screen and (max-width: 500px) {
        display: block;
    }
`;

const ContentStyle = styled.div`
    flex: 1;
`;

const InputStyle = styled.input`
    font-family: inherit;
    border-radius: 5px;

    width: 500px;
`;

interface AdminProps {
    readonly setMenu: Dispatch<SetStateAction<any>>;
}

export const AdminLayout: React.FC<AdminProps> = ({ children, setMenu }) => {
    const [isAdmin, setBeAdmin] = useState<boolean>(false);
    const user = useUser();

    useEffect(() => {
        if (user !== undefined && user.isAdmin) {
            setBeAdmin(true);
        }
    }, [user]);

    if (isAdmin) {
        return (
            <WrapperStyle>
                <AdminSidebar setMenu={setMenu}/>

                <ContentStyle>
                    {children}
                </ContentStyle>

                <ColorBackground color={'#111111'}/>
            </WrapperStyle>
        );
    }

    return (
        <>
            <h1>관리자 전용 페이지입니다.</h1>
            <ColorBackground color={'#111111'}/>
        </>
    );
};

export default AdminLayout;
