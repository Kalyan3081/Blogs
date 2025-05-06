import React, { useState } from 'react'
import './auth.scss'
import Button from '../../components/button/Button'

const Login = () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitfun = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const form = e.target
        const formlogindata = {
            email: form["email"].value,
            password: form["password"].value
        }
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            // headers is used to tell the server that the data we are sending is in json format
            headers: {
                "Content-Type": "application/json"
            },
            // body is used to send the data to the server
            body: JSON.stringify(formlogindata)
        })
        if (response.status >= 200 && response.status < 300) {
            // Successfull
        }
        else {
            const errMsg = await response.json()
            setError(errMsg.message || "Login failed. Please try again.")
        }
        setIsLoading(false)
    }
    return (
        <>
            <div className="auth-container">
                <form action="" className="form login-form" onSubmit={onSubmitfun}>
                    <input type="text" name="email" id="email" placeholder='Enter your email' required />
                    <input type="password" name="password" id="password" placeholder='Enter your password' required />
                    <Button text="Login" isLoading={isLoading} />
                    {error && <p className='error-msg'>{error}</p>}
                </form>
            </div>
        </>
    )
}

export default Login