import React from 'react'

const approved = [ 'Paula', 'Roberta', 'Gustavo', 'Julia' ]

export default props => {
    const createItems = items => {
        return items.map(item => <li>{item}</li>)
    }

    return (<ul>
        { createItems(approved) }
    </ul>)
}