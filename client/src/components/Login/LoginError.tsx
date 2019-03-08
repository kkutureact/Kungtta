import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import ColorBackground from "../Util/ColorBackground";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';
import Container from '../Util/Container';

const Box = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    margin-top: 100px;
    color: #e74c3c;
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
                    <Title>로그인 오류<i>!</i></Title>
                    <p>오류로 인하여 로그인에 실패하였습니다. 관리자에게 문의하세요.</p>

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