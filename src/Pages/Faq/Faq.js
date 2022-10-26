import React from 'react';

import { useContext } from 'react'
import { AuthContext } from '../../AuthProvide/AuthProvider';

const Faq = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>faq</h1>
        </div>
    );
};

export default Faq;