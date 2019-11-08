import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
// import Family from './components/Family'
// import Member from './components/Member'
// import FunctionComponent from './components/FunctionComponent'
// import Parent from './components/Parent'
// import ClassComponent from './components/ClassComponent'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <ClassComponent value='olá mundo'/> */}
        {/* <Parent /> */}
        <Counter value='10'/>

        {/* <Family lastName='Zibetti'>
            <Member name='Idinir' age='71'/>
            <Member name='Otaviano' age='39' />
            <Member name='Gabriel' age='17' />
            <Member name='Marlus' age='38' />
        </Family> */}
    </div>,
    element
)
