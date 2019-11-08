import React from 'react'

export default props =>
    <div>
        <button onClick={() => props.notify('Shopping')}>
            Vou sair
        </button>
    </div>