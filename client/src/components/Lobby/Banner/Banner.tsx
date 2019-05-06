import React from 'react';
import styled from 'styled-components';
import ColorButton from '../../../utils/Buttons/ColorButton';

const ContainerStyle = styled.div`
    float: right;
    width: 38%;
    margin-top: 10px;
    background-color: #DEAF56;
    border: 2px solid #000000;
    border-radius: 10px;
`;

const ButtonListStyle = styled.div`
    width: 100%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 10px;
    text-align: center;
`;

const BorderStyle = styled.div`
    border: 8px solid #DEAF56;
    border-radius: 10px;
`;

export const Banner: React.FC = () => {
    return (
        <ContainerStyle>
            <BorderStyle>
                <ButtonListStyle>
                    <ColorButton color={'#00b894'}>바로가기</ColorButton>
                    <ColorButton color={'#00cec9'}>바로가기</ColorButton>
                    <ColorButton color={'#0984e3'}>바로가기</ColorButton>
                    <ColorButton color={'#6c5ce7'}>바로가기</ColorButton>
                    <ColorButton color={'#ff7675'}>바로가기</ColorButton>
                    <ColorButton color={'#fd79a8'}>바로가기</ColorButton>
                    <ColorButton color={'#d63031'}>바로가기</ColorButton>
                </ButtonListStyle>
            </BorderStyle>
        </ContainerStyle>
    );
}

export default Banner;
