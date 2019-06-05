import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../../utils/ContentBox/BoxTitle';
import BoxContent from '../../../../utils/ContentBox/BoxContent';

const ListStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 790px;
    height: 360px;
    
    div {
        float: left;
    }
`;

export const Shop: React.FC = () => {
    return (
        <ListStyle>
            <BoxTitle>상점</BoxTitle>
            <BoxContent>

            </BoxContent>
        </ListStyle>
    );
};

export default Shop;
