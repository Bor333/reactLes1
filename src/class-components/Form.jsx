import React from 'react'

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: 'geekbrains'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(params) {
        this.setState({count: 2})
    }

    render() {
        return <form>
            <p>Count: {this.state.count}</p>
            <p>Name: {this.state.name}</p>
            <button type="button" onClick={this.handleClick}>click</button>
        </form>
    }

}