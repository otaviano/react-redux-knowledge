import React from 'react'
import Member from './Member'

export default props =>
<div>
    <Member name='Idinir' lastName={'Noemia Montes ' + props.lastName} />
    <Member name='Otaviano' lastName={'Montes ' + props.lastName} />
    <Member name='Gabriel' lastName={'Iwersen ' + props.lastName} />
    <Member name='Marlus' lastName={'Montes ' + props.lastName} />
</div>