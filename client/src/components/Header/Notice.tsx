import React from 'react';
import styled from 'styled-components';
import Tooltip from '../Util/Tooltip';

const Bar = styled.div`
    padding: 3px 0px;
    margin-top: 30px;
    color: #111111;
    text-align: center;
    font-weight: 800;
    background-color: #EEBB33;
    cursor: pointer;
    z-index: 100;
`;

export const Notice: React.FC = ({children}) => {
    return (
        <>
            <Bar>
                <div>{children}</div>
            </Bar>
        </>
    );
}

export default Notice;