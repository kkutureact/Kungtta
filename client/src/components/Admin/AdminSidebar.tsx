import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

const SidebarWrapperStyle = styled.div`
    min-width: 13%;
    height: 100vh;
    flex: 0 0 13%;
    background-color: #282c37;

    @media screen and (max-width: 500px) {
        max-width: none;
        flex: none;
        width: 100vw;
        height: 320px;
    }
`;

const SidebarTitleStyle = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin: 10px 16px;
`;

const SidebarItemStyle = styled.div`
    display: block;
    color: white;
    padding: 16px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #1a1d25;
    }
`;

const LinkStyle = styled.a`
    text-decoration: none;
    color: white;
`;

interface AdminSidebarProps {
    readonly setMenu: Dispatch<SetStateAction<any>>;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ setMenu }) => {

    const onUserManagerClick = () => setMenu('USER');

    return (
        <SidebarWrapperStyle>
            <SidebarTitleStyle>관리자</SidebarTitleStyle>

            <SidebarItemStyle onClick={onUserManagerClick}>유저 관리</SidebarItemStyle>
            <LinkStyle href='https://www.toolfk.com/lang_ko_convert-unixtime' target='_blank'><SidebarItemStyle>Unixtime 변환기</SidebarItemStyle></LinkStyle>
        </SidebarWrapperStyle>
    );
};

export default AdminSidebar;