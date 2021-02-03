// Creating todo list
import React, { Component } from 'react'

class Main extends Component {
    constructor(props) {
        super(props)
        // 1. create the list and new item states
        this.state = {
             newItem : '',
             list : []
        }
    }
    
    handleInput = (e) => {
        this.setState({
            // 2. set new item to event value
            [e.target.name] : e.target.value
        })
    }
    
    handleClick = (e) => {
        // 3. create new item with id
        let newItem = {
            id : 1 + Math.random(),
            text : this.state.newItem.slice()
        }
        // 4. update list with previous list
        const list = [...this.state.list]
        // 5. add new item to end of list above
        list.push(newItem)
        // 6. set new item to empty and update list'state
        this.setState({
            newItem: '',
            list : list
        })
    }

    handleDelete = (id) => {
        //7. create list
        const list = [...this.state.list]
        // 8. create list to be displayed
        const updatedList = list.filter(item => item.id !== id)
        // 9. above. if item's id is not equal to id
        this.setState({
            list : updatedList
        })
    }


    render() {
        return (
            <div>
                <div>
                    {/* 10. create input and button */}
                    <input type="text" name = 'newItem' value={this.state.newItem} onChange={this.handleInput}/>
                    <button onClick={this.handleClick}>add</button>
                </div>
                <div>
                    <ul>
                        {/* 11. create list */}
                        {this.state.list.map( item => {
                           return (<li key = {item.id}>
                                {item.text}
                                {/* 12. create delete button */}
                                <button onClick={() => this.handleDelete(item.id)}>
                                    x
                                </button>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main
