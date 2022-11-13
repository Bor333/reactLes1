import React from 'react'

export class Form extends React.Component {
    state = {
        count: 1,
        name: 'geekbrains'
    }

    handleChangeName = (ev) => {
        this.setState({name: ev.target.value})
    }

    render() {
        return <form>
            <p>Name: {this.state.name}</p>
            <input type="text" onChange={this.handleChangeName}/>
        </form>
    }

}