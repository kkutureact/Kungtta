import React from 'react';

interface Props {
    readonly name: string
}

export const AdminItem: React.FC<Props> = ({children, name}) => {
    return (
        <fieldset>
            <legend>{name}</legend>
            <div>
                {children}
            </div>
        </fieldset>
    );
};

export default AdminItem;
