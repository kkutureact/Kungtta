import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ColorBackground from '../../utils/ColorBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import Container from '../../utils/Container';

const BoxStyle = styled.div`
    text-align: center;
`;

const TitleStyle = styled.h1`
    margin-top: 100px;
    color: #e74c3c;
`;

const BackToLobbyStyle = styled(Link)`
    text-decoration: none;
	color: #EEEEEE;
`;

export const LoginError: React.FC = () => {
    return (
        <>
            <Container>
                <BoxStyle>
                    <TitleStyle>로그인 오류<i>!</i></TitleStyle>
                    <p>오류로 인하여 로그인에 실패하였습니다. 관리자에게 문의하세요.</p>

                    <div>
                        <br/>
                        <BackToLobbyStyle to={'/'}><FontAwesomeIcon icon={faBackward}/> 로비로 돌아가기</BackToLobbyStyle>
                    </div>
                </BoxStyle>
            </Container>
            <ColorBackground color={'#111111'}/>
        </>
    );
};

export default LoginError;