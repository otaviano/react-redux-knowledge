import React from 'react'
import Child from './Child'

export default props => {
    const notify = place => alert(`Liberado para ir ao ${place}`)

    return (
        <div>
            <Child notify={notify} />
        </div>)
}
    