import { useState } from 'react';
function List(props) {
    // const  items=props.items;
    console.log(props.list);
    const [items, setItems] = useState(props.items);
    const listItems = items.map((item) =>
        <div key={item} style={{
            // width: 150,
            height:20,
            // backgroundColor: 'red'
        }}>
            {item}
        </div>
    )
    return (
        <div style={props.list==1? {//根据list来加载位置
            position: 'absolute',
            marginTop: 20,
            marginLeft: '55%',
            padding:5,
            textAlign: 'center',
            width:'10%',
            borderColor:'#C0C0C0',
            borderWidth: 1,
            borderStyle: 'solid'
        } : {
            position: 'absolute',
            marginTop: 20,
            width:'10%',
            padding:5,
            marginLeft: '35%',
            textAlign: 'center',
            borderColor:'#C0C0C0',
            borderWidth: 1,
            borderStyle: 'solid'
        }}>
            {listItems}
        </div>

    );
}
export default List;