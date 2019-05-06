import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../utils/ContentBox/BoxTitle';
import BoxContent from '../../../utils/ContentBox/BoxContent';
import Body from '../../../assets/images/character/body.png';

const ContainerStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 200px;
    height: 190px;
    
    div {
        float: left;
    }
`;

const ImageStyle = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
    
    img {
        position: absolute;
    }    
`;


export const MyProfile: React.FC = () => {
    return (
        <>
            <ContainerStyle>
                <BoxTitle>내 정보</BoxTitle>
                <BoxContent>
                    <ImageStyle>
                        <img src={Body}></img>
                    </ImageStyle>
                </BoxContent>
            </ContainerStyle>
        </>
    );
};

export default MyProfile;