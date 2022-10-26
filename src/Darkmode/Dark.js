import React from 'react';
import { useState, useEffect } from 'react';

const Dark = () => {
    const [theme, setTheme] = useState('light')

    // useEffect(() => {

    //     if (window.matchMedia('(prefers - color - scheme: dark)').matches) {
    //         setTheme('dark')

    //     }
    //     else {
    //         setTheme('light')
    //     }
    // }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }

    }, [theme])

    const handlSwitch = () => {
        console.log('amsar')
        setTheme(theme === 'dark' ? 'dark' : 'light')
    }

    return (
        <div className=' h-screen bg-white dark:bg-black flex justify-center items-center'>
            <button onClick={handlSwitch} className='bg-green-200 p-4 rounded-3xl'>
                Switch dark
            </button>
        </div>
    );
};

export default Dark;