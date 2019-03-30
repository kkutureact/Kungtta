import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

import Notice from './Notice';
import {useUser} from '../../hooks/useUser';
import config from '../../config';

const Menu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
	width: 100%;
	height: 30px;
	box-shadow: 0px 2px 2px #111111;
	background-color: #7CC4F8;
`;

const MenuButton = styled.a`
	float: left;
	padding: 5px 5px 5px 5px;
	
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	
	width: 100px;
	height: 18px;
	
	font-size: 15px;
	text-align: center;
	text-decoration: none;
	color: #111111;
	
	background-color: #7CC4F8;
	
	transition: all 200ms ease;
	
	&:hover { 
        padding-top: 12px; 
        height: auto; 
        box-shadow: 0px 2px 2px #141414;
	}
`;

const Login = styled.div`
    color: #444444;
	float: right;
	padding-top: 8px;
	margin-right: 10px;
	
	text-align: center;
	font-size: 11px;
	text-decoration: none;
	
	cursor: pointer;
	transition: color 300ms ease;
	
	&:hover {
	    color: #EEEEEE;
	}
`;


export const NavigationBar: React.FC = () => {
    const user = useUser();

    const AccountButton = () => {
        if (user !== undefined && user.vendor !== 'guest') {
            return <a href={`${config.endpointHost}/logout`}><Login><FontAwesomeIcon
                icon={faSignOutAlt}/> 환영합니다! {user.nickname}님</Login></a>;
        } else {
            return <Link to={'/login'}><Login><FontAwesomeIcon icon={faSignInAlt}/> 로그인</Login></Link>;
        }
    };

    return (
        <>
            <Menu>
                <MenuButton href={'/'}><FontAwesomeIcon icon={faHome}/></MenuButton>
                <AccountButton/>
                <Notice>dd</Notice>
            </Menu>
        </>
    );
};

export default NavigationBar;