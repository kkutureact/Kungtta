import React from 'react';
import styled from 'styled-components';

const Update = styled.div`
    float: left;
    width: 100%;
    margin-top: 10px;
    background-color: #DEAF56;
    border: 8px solid #DEAF56;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 400px;
    margin-bottom: -3px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const UpdateLog: React.FC = () => {
    return (
        <Update>
            <Iframe src={'/updatelog.html'}></Iframe>
        </Update>
    );
}

export default UpdateLog;
