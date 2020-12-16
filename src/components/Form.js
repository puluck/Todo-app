import { TodoList } from "./TodoList";

export const Form = (props)=>{  // OR export const Form = ({setInputText}) =>{ and so on

    const handleInputText = (e) =>{
            props.setInputText(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); //prevents refresh of page on every submit
        props.setTodos([...props.todos, {text:props.inputText, completed:false, id:Math.random()*1000 } ]);
        props.setInputText('');
    }

    const handleStatus=(e)=>{
        props.setStatus(e.target.value)
    }

    return (
        <form>
        <input value={props.inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button onClick={handleSubmit} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleStatus} className="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </form>

    );
}