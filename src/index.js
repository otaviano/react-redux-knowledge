import React from 'react'
import ReactDOM from 'react-dom'
import Family from './components/Family'
import Member from './components/Member'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <Family>
            <Member name='Idinir' lastName='Noemia Montes Zibetti'/>
            <Member name='Otaviano' lastName='Montes Zibetti'/>
            <Member name='Gabriel' lastName='Iwersen Zibetti'/>
            <Member name='Marlus' lastName='Montes Zibetti'/>
        </Family>
    </div>,
    element
)
