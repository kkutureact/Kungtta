import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ColorBackground from '../Util/ColorBackground';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';
import Container from '../Util/Container';

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

export const LoginBan: React.FC = () => {
    return (
        <>
            <Container>
                <BoxStyle>
                    <TitleStyle>이용 차단<i>!</i></TitleStyle>
                    <p>관리자에 의하여 서비스 이용이 차단되었습니다.</p>

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

export default LoginBan;