import React from 'react';
import Notice from './Notice';
import NavigationBar from './NavigationBar';
import styled from 'styled-components';

const MenuStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
	width: 100%;
	height: 30px;
	box-shadow: 0px 2px 2px #111111;
	background-color: #7CC4F8;
`;

export const Header: React.FC = () => {
    return(
      <MenuStyle>
          <NavigationBar/>
          <Notice>TEST</Notice>
      </MenuStyle>
    );
};

export default Header;
