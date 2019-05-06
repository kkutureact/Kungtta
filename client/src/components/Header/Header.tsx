import React from 'react';
import Notice from './Notice';
import NavigationBar from './NavigationBar';

export const Header: React.FC = () => {
    return(
      <>
          <NavigationBar/>
          <Notice>dd</Notice>
      </>
    );
};

export default Header;