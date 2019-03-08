import React from 'react';
import styled from 'styled-components';

const Update = styled.div`
    float: left;
    width: 60%;
    margin-top: 10px;
    background-color: #DEAF56;
    border: 2px solid #000000;
    border-radius: 10px;
    
    @media (max-width: 600px) {
        width: 35%;
    }
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 400px;
    margin-bottom: -3px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 10px;
`;

const Border = styled.div`
    border: 8px solid #DEAF56;
    border-radius: 10px;
`;

export const UpdateLog: React.FC = () => {
    return (
        <Update>
            <Border>
                <Iframe src={'/updatelog.html'}></Iframe>
            </Border>
        </Update>
    );
}

export default UpdateLog;
