import React from 'react'

export const LoginScreen = () => {

    const handleSesion = () => {
        console.log('Logged');
    }

    return (
        <div className="login_btn-login" onClick = { handleSesion }>
            <p>Iniciar sesión con Google</p>
        </div>
    )
}
