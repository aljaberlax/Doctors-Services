import React from 'react';
import { useEffect, useState } from 'react';
const UseToken = user => {
    const [token, setToken] = useState('')
    console.log(token)
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://doctor-service-server.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const asscessToken = data.token;
                    localStorage.setItem('accessToken', asscessToken)
                    setToken(asscessToken)
                })
        }
    }, [user])
    return [token]
};

export default UseToken;