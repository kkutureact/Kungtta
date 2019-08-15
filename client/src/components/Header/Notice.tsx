import React, { useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const BarStyle = styled.div<{ close: boolean }>`
    visibility: ${props => props.close ? 'hidden' : 'visible'};
    padding: 3px 0px;
    margin-top: 30px;
    color: #111111;
    text-align: center;
    font-weight: 800;
    background-color: #EEBB33;
    cursor: pointer;
    z-index: 100;
`;

export const Notice: React.FC = ({ children }) => {
    const [isClosed, setClose] = useState<boolean>(false);

    return (
        <>
            <BarStyle close={isClosed} onClick={() => setClose(true)} data-tip={true} data-for={'notice'}>
                <div>{children}</div>
            </BarStyle>

            <ReactTooltip id={'notice'} place={'bottom'}>클릭하여 닫기</ReactTooltip>
        </>
    );
};

export default Notice;