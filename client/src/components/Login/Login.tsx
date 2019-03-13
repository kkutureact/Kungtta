import React from 'react';
import styled from "styled-components";
import KkutuButton from "../Util/KkutuButton";
import {Link} from "react-router-dom";
import ColorBackground from "../Util/ColorBackground";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';
import Container from '../Util/Container';

const Box = styled.div`
    text-align: center;
`;

const LoginTitle = styled.h2`
    margin-top: 100px;
`;

const BackToLobby = styled(Link)`
    text-decoration: none;
	color: #EEEEEE;
`;

export const Login: React.FC = () => {
    return (
        <>
            <Container>
                <Box>
                    <LoginTitle>로그인하기</LoginTitle>
                    <p>소셜서비스를 이용하여 끄투에 로그인 해보세요!</p>

                    <KkutuButton color={'#00C73C'}>네이버</KkutuButton>
                    <br/>
                    <KkutuButton color={'#ea4335'} href={'http://localhost:8080/auth/google'}>구글</KkutuButton>

                    <div>
                        <br/>
                        <BackToLobby to={'/'}><FontAwesomeIcon icon={faBackward}/> 로비로 돌아가기</BackToLobby>
                    </div>
                </Box>
            </Container>
            <ColorBackground color={'#111111'}/>
        </>
    );
}

export default Login;