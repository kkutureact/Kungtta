import React from 'react';
import styled from 'styled-components';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';

const FooterStyle = styled.div`
    float: left;
    text-align: center;
    margin-top: 50px;
`;

const FooterTextStyle = styled.div`
    font-size: 11px;
    color: #666;
    margin-bottom: 15px;
`;

const FooterAStyle = styled.a`
    text-decoration: none;
    color: #666;
`;

const FooterLinkStyle = styled(Link)`
    text-decoration: none;
    color: #666;
`;

const github = 'https://github.com/SkyLightQP/KKutuReact';
const termsOfService = '';
const privacyPolicy = '';

export const Footer: React.FC = () => {
    return (
        <Container>
            <FooterStyle>
                <Container>
                    <FooterTextStyle>KKutuReact은(는) JJoriping의 KKutu을(를) 모티브로 하여 SkyLightQP이(가)
                        제작하였습니다.</FooterTextStyle>
                    <FooterTextStyle>
                        이 프로그램은 제품에 대한 어떠한 형태의 보증도 제공되지 않으며 배포 규정을 만족시키는 조건 아래 자유롭게 재배포할 수 있습니다. <br/>
                        이에 대한 자세한 사항은 본 프로그램의 구현을 담은 다음 레포지토리에서 확인하십시오.
                        View on <FooterAStyle href={github}><b>GitHub</b></FooterAStyle>
                    </FooterTextStyle>
                    <FooterTextStyle>Copyright &copy; 2019 SkyLightQP.</FooterTextStyle>
                    <FooterTextStyle>
                        KKutuReact 이용 시&nbsp;
                        <b><FooterAStyle href={termsOfService}>이용약관</FooterAStyle> &middot; <FooterAStyle
                            href={privacyPolicy}>개인정보처리방침</FooterAStyle></b>
                        에 동의하는 것으로 간주합니다.
                    </FooterTextStyle>
                    <FooterTextStyle>
                        해당 서비스는 Internet Explorer 및 모바일 환경을 지원하지 않습니다. <br/>
                        원활한 사용을 위해
                        <b><FooterAStyle
                            href={'https://www.google.co.kr/chrome/'}> Chrome</FooterAStyle></b>, <b><FooterAStyle
                        href={'https://www.mozilla.org/ko/'}>Firefox </FooterAStyle></b>
                        또는 PC 환경을 사용해주세요.
                    </FooterTextStyle>
                    <FooterTextStyle>
                        <FooterLinkStyle to={'/admin'}>ADMIN PANEL</FooterLinkStyle>
                    </FooterTextStyle>
                </Container>
            </FooterStyle>
        </Container>
    );
};

export default Footer;