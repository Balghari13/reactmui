import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import './App.css'
import Todo from './Todo';
function App() {
  const[items, setItems]= useState('aksks')
  const[list, setList]= useState([]);
  const inputItem =(e)=>{
      setItems(e.target.value)
  }
  const addItem = ()=>{
      setList((e)=>{
        return[...e, items]
      })
      setItems('')
  }
  return (
    
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder="Add an Items"
          onChange={inputItem} value={items}
          />
          <Button className='new_btn' onClick={addItem}>
            <AddIcon/>
          </Button>

          <ol>
            {list.map((prev,ind)=>{
              return <Todo
              text={prev}
              key={ind}
              />
            })}
          </ol>
       </div> 

      </div>

    </>
    
  );
}

export default App;
