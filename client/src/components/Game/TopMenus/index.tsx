import React from 'react';
import styled from 'styled-components';
import TopMenuButton from './TopMenuButton';

const TopMenusStyle = styled.div`
    float: left;
    width: 1010px;
    height: 30px;
`;

export const TopMenus: React.FC = () => {
    return (
        <TopMenusStyle>
            <TopMenuButton color={'#cccccc'} isTiny={true}>가</TopMenuButton>
            <TopMenuButton color={'#daa9ff'} isTiny={true}>가</TopMenuButton>
            <TopMenuButton color={'#8ec0f3'} isTiny={false}>가</TopMenuButton>
            <TopMenuButton color={'#b0d2f3'} isTiny={false}>가</TopMenuButton>
            <TopMenuButton color={'#b3e7b7'} isTiny={false}>가</TopMenuButton>
            <TopMenuButton color={'#73d07a'} isTiny={false}>가</TopMenuButton>
            <TopMenuButton color={'#d9ff82'} isTiny={false}>가</TopMenuButton>
            <TopMenuButton color={'#ffb7d3'} isTiny={false}>가</TopMenuButton>
        </TopMenusStyle>
    );
};

export default TopMenus;