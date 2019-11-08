import React, { Component } from 'react'

export default class Counter extends Component{
    state = {
        value: this.props.value || 0
    }
    
    // constructor(props){
    //     super(props)

    //     this.sum = this.sum.bind(this)
    //     this.minus = this.minus.bind(this)
    // }

    render(){
        return <div>
            <div><strong>Número: </strong>{ this.state.value }</div>
            <button onClick={ this.sum }>Inc</button>
            <button onClick={ this.minus }>Dec</button>
        </div>
    }

    sum = () => {
        this.setState( { value: this.state.value + 1 } )
    }

    minus= () => {
        this.setState( { value: this.state.value - 1 } )
    }
}
