import React,{Component} from 'react';
import './App.css'
import ToDoItem from './components/ToDoItem'
import todosData from './Data/todosData'




class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: todosData
        }
    }
///////
    render(){
        const todoItems = this.state.todos.map((item) => {
            return(
                <ToDoItem key={item.id} item={item} />
            )
        });
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );
    }
}

export default App;
