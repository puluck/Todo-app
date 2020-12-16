import {Todo} from './Todo';

export const TodoList = ({todos,setTodos,status})=>{

    
    return (
      <div className="todo-container">
        <ul className="todo-list">
           {todos.map(todoItem=> {
           
                                    if(status==='all')
                                    {
                                      return <Todo key={todoItem.id} todos={todos} 
                                      todo={todoItem} text={todoItem.text} 
                                      setTodos={setTodos}
                                      />;
                                    }
                                    else if (status==='completed')
                                    {
                                        if (todoItem.completed===true)
                                        {return <Todo key={todoItem.id} todos={todos} 
                                        todo={todoItem} text={todoItem.text} 
                                        setTodos={setTodos}
                                        />;  }
                                        else{
                                            return; 
                                        }
                                    }
                                    else if (status==='pending')
                                    {
                                        if (todoItem.completed===false)
                                        {return <Todo key={todoItem.id} todos={todos} 
                                        todo={todoItem} text={todoItem.text} 
                                        setTodos={setTodos}
                                        />;  }
                                        else{
                                            return; 
                                        }
                                    }
                            
                            
                                  }
                     )
            } 
        </ul>
      </div>

    );
}