import React from 'react'
import './button.scss'

const Button = ({ text, isLoading = false }) => {
    return (
        <button className='loading-button' disabled={isLoading}>
            {isLoading ? <span className='loader'></span> : text}
        </button>
    )
}

export default Button