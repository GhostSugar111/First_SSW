import { useState } from 'react';
function ResultList(props) {
    // const  items=props.items;
    console.log(props.items);
    const [items, setItems] = useState(props.items);
    const listItems = items.map((item) =>
        <div key={item} style={{
            width: 150,
            height:20

            // backgroundColor: 'red'
        }}>
            This is Para {item}
        </div>
    )
    return (
        <div style={{
            position: 'absolute',
            width:'30%',
            padding:5,
            height:80,
            marginTop: 200,
            marginLeft: '35%',
            // textAlign: 'center',
            borderColor:'#C0C0C0',
            borderWidth: 1,
            borderStyle: 'solid'
        }}>
            {listItems}
        </div>

    );
}
export default ResultList;