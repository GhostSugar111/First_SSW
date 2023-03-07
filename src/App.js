import { useState } from 'react';
import './App.css';
import List from './List';
import ResultList from './ResultList';
function Btn() {
  return (
    <div>
      <div style={{
        position: 'absolute',
        paddingLeft: 5,
        marginTop: 20,
        marginLeft: '50%',
        // width: '1%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 5,
        borderStyle: 'solid'

      }}>》
      </div>
      <div style={{
        position: 'absolute',
        paddingRight: 5,
        marginTop: 80,
        marginLeft: '50%',
        // width: '1%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 5,
        borderStyle: 'solid'

      }}>《
      </div>
      <div style={{
        position: 'absolute',
        padding: 5,
        marginTop: 140,
        textAlign:'center',
        marginLeft: '49.5%',
        width: '2%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 5,
        borderStyle: 'solid'

      }}>OK
      </div>
    </div>


  );
}
function okBtn() {
  return (
    <button></button>
  );
}
function App() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D']);
  const list = [0, 1];//左0右1
  return (
    <div>
      <List list={list[0]} items={items}></List>
      <List list={list[1]} items={items}></List>
      <ResultList items={items}></ResultList>
      <Btn></Btn>
    </div>
  );
}

export default App;
