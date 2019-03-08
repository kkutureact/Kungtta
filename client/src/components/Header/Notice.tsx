import React, {useState} from 'react';
import styled from 'styled-components';

const Bar = styled.div<{ close: boolean }>`
    visibility: ${props => props.close ? 'visible' : 'hidden'};
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
    const [isClosed, setClose] = useState<boolean>(true);

    return (
        <>
            <Bar close={isClosed} onClick={() => setClose(false)}>
                <div>{children}</div>
            </Bar>
        </>
    );
}

export default Notice;