import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useUser} from '../../hooks/useUser';
import config from '../../config';


const MenuButtonStyle = styled(Link)`
	float: left;
	padding: 5px 5px 5px 5px;
	
	border-radius: 0px 0px 5px 5px;
	
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

const LoginStyle = styled.div`
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

    return (
        <>
            <MenuButtonStyle to={'/'}><FontAwesomeIcon icon={faHome}/></MenuButtonStyle>
            {
                user !== undefined && user.vendor !== 'guest' ?
                    <a href={`${config.endpointHost}/logout`}><LoginStyle><FontAwesomeIcon
                        icon={faSignOutAlt}/> 환영합니다! {user.nickname}님</LoginStyle></a> :
                    <Link to={'/login'}><LoginStyle><FontAwesomeIcon icon={faSignInAlt}/> 로그인</LoginStyle></Link>
            }
        </>
    );
};

export default NavigationBar;