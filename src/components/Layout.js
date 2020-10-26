import React from 'react'

export const Layout = props => {
    return (
        <div className={`app-layout ${props.className}`}>
            {props.children}
        </div>
    )
}
