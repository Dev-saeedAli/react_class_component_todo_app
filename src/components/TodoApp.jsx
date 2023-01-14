import React, {Component} from "react";
import TodoList from "./TodoList";
import { TodoContextProvider } from "../components/context/Context";


class TodoApp extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            text : "",
            todolist : localStorage.getItem('todos') === null ? localStorage.setItem('todos', JSON.stringify([])) : JSON.parse(localStorage.getItem('todos')),
        }
        this.submitForm = this.submitForm.bind(this)
        this.deleteForm = this.deleteForm.bind(this)
        this.saveForm = this.saveForm.bind(this)
        console.log("This is constructor form");
    }

    saveForm (id) {
        this.setState({
            todolist : this.state.todolist.map(list => list.id === id ? {...list, completed : !list.completed} : {...list} )
        })
    }

    deleteForm(id){
        console.log("This is delete form");
        this.setState({
            todolist : this.state.todolist.filter(item => item.id !== id)
        })
    }

    componentDidUpdate () {
      localStorage.setItem("todos", JSON.stringify(this.state.todolist))
    }

    // const deleteLocal = 
    submitForm(event){
        console.log("This is submit form");
        event.preventDefault()
        if(this.state.text !== ""){
            this.setState({
                todolist : [...this.state.todolist, { id : parseInt(Math.floor(Math.random() * 3000000)), todo : this.state.text, completed : false}],
                text : ""
            })
        }
    }
    
    render() {
        const { text, todolist } = this.state
        console.log("This is a render");
        return (
            <div className="container">
            <form onSubmit={this.submitForm} className="text-center">
            <label htmlFor="todo"  className="form-label"></label>
             <input type="text" id="todo" value={text} onChange={(e) => this.setState({text : e.target.value})} className="form-control" placeholder="enter your todos" />
             <button className="btn btn-primary my-4 w-25" type="submit">Add todo</button>
            </form>
            <TodoContextProvider value={{delete : this.deleteForm, save : this.saveForm}}>
            <TodoList todolist={todolist}/>
            </TodoContextProvider>
            </div>
        )
    }
}

export default TodoApp