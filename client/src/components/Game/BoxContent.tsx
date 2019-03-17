import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    padding: 5px 5px 0px 5px;
    font-size: 12px;
`;

export const BoxContent: React.FC = ({ children }) => {
    return (
        <>
            <Content>
                {children}
            </Content>
        </>
    );
};

export default BoxContent;