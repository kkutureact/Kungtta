import React from 'react';
import styled from 'styled-components';
import body from '../../assets/images/character/body.png';
import defaultImage from '../../assets/images/character/default.png';
import defaultEyes from '../../assets/images/character/eyes/default_eyes.png';
import defaultMouth from '../../assets/images/character/mouths/default_mouth.png';

const ProfileStyle = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
`;

const MoremiImageStyle = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Moremi: React.FC = () => {
    return (
        <ProfileStyle>
            <MoremiImageStyle src={defaultImage} alt={'Background'}/>
            <MoremiImageStyle src={body} alt={'Body'}/>
            <MoremiImageStyle src={defaultEyes} alt={'Eyes'}/>
            <MoremiImageStyle src={defaultMouth} alt={'Mouth'}/>
            <MoremiImageStyle src={defaultImage} alt={'Shoes'}/>
            <MoremiImageStyle src={defaultImage} alt={'Clothe'}/>
            <MoremiImageStyle src={defaultImage} alt={'Head'}/>
            <MoremiImageStyle src={defaultImage} alt={'LeftHand'}/>
            <MoremiImageStyle src={defaultImage} alt={'RightHand'}/>
        </ProfileStyle>
    );
};

export default Moremi;
