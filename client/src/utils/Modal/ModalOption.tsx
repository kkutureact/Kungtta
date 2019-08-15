import React from 'react';
import styled from 'styled-components';

const ModalBarStyle = styled.div`
    float: left;
    margin: 3px 0px;
    width: 100%;

    p {
        float: left;
        width: 100px;
        text-align: center;
    }

    input {
        width: auto;
        float: left;
        margin-top: 10px;
    }
`;

const ModalBarOptionStyle = styled.div`
    float: left;
    width: 100px;
`;

interface Props {
    readonly title: string;
}

export const ModalOption: React.FC<Props> = ({ title, children }) => {
    return (
        <ModalBarStyle>
            <p>{title}</p>
            <ModalBarOptionStyle>
                {children}
            </ModalBarOptionStyle>
        </ModalBarStyle>
    );
};

export default ModalOption;