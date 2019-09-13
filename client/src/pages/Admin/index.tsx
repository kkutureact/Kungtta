import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AdminUser from './AdminUser';

type Flag = 'USER';

export const Admin: React.FC = () => {
    const [menu, setMenu] = useState<Flag>('USER');

    if(menu === 'USER') {
        return (
            <AdminLayout setMenu={setMenu}>
                <AdminUser/>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout setMenu={setMenu}>
            <AdminUser/>
        </AdminLayout>
    );
};

export default Admin;
