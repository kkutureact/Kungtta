import React from 'react';
import styled from 'styled-components';
import BannerButton from './BannerButton';

const Container = styled.div`
    float: right;
    width: 38%;
    margin-top: 10px;
    background-color: #DEAF56;
    border: 2px solid #000000;
    border-radius: 10px;
`;

const ButtonList = styled.div`
    width: 100%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 10px;
    text-align: center;
`;

const Border = styled.div`
    border: 8px solid #DEAF56;
    border-radius: 10px;
`;

export const Banner: React.FC = () => {
    return (
        <Container>
            <Border>
                <ButtonList>
                    <BannerButton color={'#00b894'}>바로가기</BannerButton>
                    <BannerButton color={'#00cec9'}>바로가기</BannerButton>
                    <BannerButton color={'#0984e3'}>바로가기</BannerButton>
                    <BannerButton color={'#6c5ce7'}>바로가기</BannerButton>
                    <BannerButton color={'#ff7675'}>바로가기</BannerButton>
                    <BannerButton color={'#fd79a8'}>바로가기</BannerButton>
                    <BannerButton color={'#d63031'}>바로가기</BannerButton>
                </ButtonList>
            </Border>
        </Container>
    );
}

export default Banner;
