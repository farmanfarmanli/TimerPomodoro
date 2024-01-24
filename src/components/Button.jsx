import React from 'react'

const Button = ({title, activeClass, _callback}) => {
    return (
        <button onClick={_callback} className={activeClass}>
            {title}
        </button>
    )
}

export default Button