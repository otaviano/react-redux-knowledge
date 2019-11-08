import React from 'react'

export default props =>
    <div>
        { React.Children.map(props.children, p => {
            return React.cloneElement(p, { ...props } )
        })}
    </div>