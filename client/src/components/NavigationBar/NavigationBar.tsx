import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
	width: 100%;
	height: 30px;
	box-shadow: 0px 2px 2px #111111;
	background-color: #7CC4F8;
`

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
	color: black;
	
	background-color: #7CC4F8;
	
	transition: all 200ms ease;
	
	&:hover { 
        padding-top: 12px; 
        height: auto; 
        box-shadow: 0px 2px 2px #141414;
	}
`

const Login = styled.div`
	float: right;
	padding-top: 8px;
	width: 80px;
	
	text-align: center;
	font-size: 11px;
	
	cursor: pointer;
	transition: color 300ms ease;
	
	&:hover {
	    color: white;
	}
`

export const NavigationBar: React.FC = () => {
    return (
        <Menu>
            <MenuButton href={"/"}>HOME</MenuButton>
            <Login>로그인</Login>
        </Menu>
    );
}

export default NavigationBar;