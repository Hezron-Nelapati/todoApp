import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext)
    console.log('Local Sign In')
    useEffect(() => {
        tryLocalSignin()
    },[])

    return null;
}

export default ResolveAuthScreen;