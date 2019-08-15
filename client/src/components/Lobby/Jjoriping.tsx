import React from 'react';
import styled from 'styled-components';

import LeftEyeImage from '../../assets/images/jjoeyeL.png';
import RightEyeImage from '../../assets/images/jjoeyeR.png';
import NoseImage from '../../assets/images/jjonose.png';
import { Link } from 'react-router-dom';

const JJOStyle = styled.div`
    margin-top: 40px;
    width: 500px;
`;

const LeftEyeStyle = styled.img`
    position: relative;
    left: -270px;
    top: 11px;
`;

const NoseStyle = styled.img`
    position: relative;
    left: -170px;
    top: 9px;
`;

const RightEyeStyle = styled.img`
    position: relative;
    left: -70px;
    top: 11px;
`;

const StartDisplayStyle = styled.div`
    width: 325px;
    height: 85px;
    padding: 20px 5px 5px 5px;
	border: 2px solid #000000;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	margin-top: -10px;
	background-color: #DEAF56;
`;

const StartButtonStyle = styled.button`
    display:block;
    box-sizing: inherit;
    font-family: inherit;
    transition: all 200ms ease;

    float: left;
    width: 315px;
    height: 70px;
    font-size: 20px;
    font-weight: bold;

    border: none;
    border-radius: 10px;
	padding: 8px 5px;
	text-align: center;
	color: #EEEEEE;
	background-color: rgba(0, 0, 0, 0.7);

	&:hover {
	    font-size: 24px;
	    background-color: rgba(0, 0, 0, 0.5);
	}
`;

export const Jjoriping: React.FC = () => {
    return (
        <JJOStyle>
            <LeftEyeStyle src={LeftEyeImage}/>
            <NoseStyle src={NoseImage}/>
            <RightEyeStyle src={RightEyeImage}/>
            <StartDisplayStyle>
                <Link to={'/rooms/0'}>
                    <StartButtonStyle>게임시작</StartButtonStyle>
                </Link>
            </StartDisplayStyle>
        </JJOStyle>
    );
};

export default Jjoriping;