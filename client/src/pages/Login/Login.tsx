import React from 'react';
import styled from "styled-components";
import ColorButton from "../../utils/Buttons/ColorButton";
import {Link} from "react-router-dom";
import ColorBackground from "../../utils/ColorBackground";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';
import Container from '../../utils/Container';
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

                    <ColorButton color={'#00C73C'} href={`${config.endpointHost}/oauth/naver`}>네이버</ColorButton>
                    <br/>
                    <ColorButton color={'#ea4335'} href={`${config.endpointHost}/oauth/google`}>구글</ColorButton>
                    <br/>
                    <ColorButton color={'#3b5998'} href={`${config.endpointHost}/oauth/google`}>페이스북</ColorButton>
                    <br/>
                    <ColorButton color={'#7289da'} href={`${config.endpointHost}/oauth/google`}>디스코드</ColorButton>
                    <br/>
                    <ColorButton color={'#333'} href={`${config.endpointHost}/oauth/google`}>GitHub</ColorButton>

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