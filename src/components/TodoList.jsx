import React, { Component, Fragment } from 'react'
import { TodoContextConsumer, TodoContext } from './context/Context'

 class TodoList extends Component {
    constructor(props) {
      super(props)
    }
    static contextType = TodoContext;
    
  render() {
    const { todolist } = this.props
    const value = this.context 
    return (
         <div className='container'>
            <ul className='nav d-block text-center gap-3 d-flex flex-column'>
                {
                    todolist?.map((item, index) => {
                        return (
                            <div className="d-flex gap-1 align-items-center" key={index}>
                            <li className={`flex-grow-1 bg-secondary text-light ${item.completed ? "text-decoration-line-through" : ""} nav-item my-2 border border-1 border-white py-2`}>{item.todo}</li>
                            <button className="btn btn-danger" onClick={() => value.delete(item.id)}>X</button>
                            <button className="btn btn-success" onClick={() => value.save(item.id)}>save</button>
                            </div>
                        )
                    })
                }
            </ul>
          </div>
            )
      {/* <div className='container'>
            <ul className='nav d-block text-center gap-3 d-flex flex-column'>
                {
                    todolist?.map((item) => {
                        return (
                            <div className="d-flex gap-1 align-items-center" key={item.id}>
                            <li className='flex-grow-1 bg-dark text-light nav-item my-2 border border-1 border-white py-3'>{item.todo}</li>
                            <button className="btn btn-danger">X</button>
                            <button className="btn btn-success">save</button>
                            </div>
                        )
                    })
                }
            </ul>
      </div> */}

  }
}

export default TodoList