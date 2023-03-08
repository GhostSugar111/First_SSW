import { useState,useRef } from 'react';
import './App.css';
import List from './List';
import ResultList from './ResultList';


function App() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D']);
  const [r_items, setR_items] = useState([]);
  //回调函数 子传父
  const  getChildItems=(resultItems)=>{
    setR_items(resultItems)
  }
  const list = [0, 1];//左0右1
  return (
    <div>
      <List list={list[0]} items={items} getItems={getChildItems}></List>
      <ResultList items={items} r_items={r_items}></ResultList>
    </div>
  );
}

export default App;
