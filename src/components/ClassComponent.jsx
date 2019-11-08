import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render(){
        return <div>{ this.props.value || 'Olá mundo Padrão'}</div>
    }
}