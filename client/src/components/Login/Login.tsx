import React from 'react';
import styled from "styled-components";
import KkutuButton from "../Util/Buttons/KkutuButton";
import {Link} from "react-router-dom";
import ColorBackground from "../Util/ColorBackground";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';
import Container from '../Util/Container';
import config from '../../config';

const BoxStyle = styled.div`
    text-align: center;
`;

const LoginTitleStyle = styled.h2`
    margin-top: 100px;
`;

const BackToLobbyStyle = styled(Link)`
    text-decoration: none;
	color: #EEEEEE;
`;

export const Login: React.FC = () => {
    return (
        <>
            <Container>
                <BoxStyle>
                    <LoginTitleStyle>로그인하기</LoginTitleStyle>
                    <p>소셜서비스를 이용하여 끄투에 로그인 해보세요!</p>

                    <KkutuButton color={'#00C73C'}>네이버</KkutuButton>
                    <br/>
                    <KkutuButton color={'#ea4335'} href={`${config.endpointHost}/auth/google`}>구글</KkutuButton>
                    <br/>
                    <KkutuButton color={'#3b5998'} href={`${config.endpointHost}/auth/google`}>페이스북</KkutuButton>
                    <br/>
                    <KkutuButton color={'#7289da'} href={`${config.endpointHost}/auth/google`}>디스코드</KkutuButton>
                    <br/>
                    <KkutuButton color={'#333'} href={`${config.endpointHost}/auth/google`}>GitHub</KkutuButton>

                    <div>
                        <br/>
                        <BackToLobbyStyle to={'/'}><FontAwesomeIcon icon={faBackward}/> 로비로 돌아가기</BackToLobbyStyle>
                    </div>

                    <div>
                        <p>개인정보처리약관 및 이용약관</p>
                    </div>
                </BoxStyle>
            </Container>
            <ColorBackground color={'#111111'}/>
        </>
    );
}

export default Login;