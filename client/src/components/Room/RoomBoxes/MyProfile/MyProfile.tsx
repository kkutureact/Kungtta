import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../../utils/ContentBox/BoxTitle';
import BoxContent from '../../../../utils/ContentBox/BoxContent';
import Moremi from '../../../Moremi/Moremi';
import a from '../../../../assets/images/kkutu/guest_icon.png';

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

const LevelStyle = styled.div<{ a: string }>`
    background-image: url(${props => props.a});
    background-size: 100%;
  
    margin: 1px;
    width: 18px;
    height: 18px;
`;

const NameStyle = styled.div`
    padding-top: 3px;
    padding-left: 4px;
    font-weight: bold;    
`;

const OtherTextStyle = styled.div`
    margin-top: 3px;
    width: 100%;
`;

// TODO 글자가 캐릭터 밑으로 내려감

export const MyProfile: React.FC = () => {
    return (
        <ContainerStyle>
            <BoxTitle>내 정보</BoxTitle>
            <BoxContent>
                <Moremi/>
                <LevelStyle a={a}/>
                <NameStyle>TEST</NameStyle>
                <OtherTextStyle>승률 100%</OtherTextStyle>
                <OtherTextStyle>1000 핑</OtherTextStyle>
                <OtherTextStyle>테스트 문구</OtherTextStyle>
            </BoxContent>
        </ContainerStyle>
    );
};

export default MyProfile;
