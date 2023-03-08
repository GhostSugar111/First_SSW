import { useState, useEffect, useRef } from 'react';

function List(props) {
    // const  items=props.items;
    // console.log(props.list);
    const [items, setItems] = useState(props.items);//从app获取items
    const [r_items, setR_items] = useState([]);//右边list的items
    const [clickKey, setClickKey] = useState(-1);//当前单击字母
    const [clickIndex, setClickIndex] = useState(-1);//当前单击下标
    // const infoRef = useRef()//存储最新数据
    //左list渲染 双击右移
    const listItems = items.map((item, i) =>

        <div key={item} style={clickKey == item ? {//判断当前点击
            // width: 150,
            height: 20,
            backgroundColor: 'red'
        } : {
            height: 20,
        }} onClick={() => btnclick(item, i)}>{/* onClick={() => btnclick(item, i)} */}
            {item}
        </div>
    )
    function btnclick(item, index) {
        // console.log(items);
        // console.log(r_items);
        setClickKey(item);
        setClickIndex(index);
        if (clickKey == item) {
            let list = [...items];
            list.splice(index, 1);
            setItems(list);
            list = [...r_items]
            setR_items([...list, item]);
            setClickKey(-1);
            setClickIndex(-1);


        }
        console.log(clickKey);
    }
    //右list渲染 双击左移
    const r_listItems = r_items.map((item, i) =>
        <div key={item + i + 4} style={clickKey == item ? {//判断当前点击
            // width: 150,
            height: 20,
            backgroundColor: 'red'

        } : {
            height: 20,

        }} onClick={() => r_btnclick(item, i)}>
            {item}
        </div>
    )
    function r_btnclick(item, index) {
        setClickKey(item);
        setClickIndex(index);
        if (clickKey == item) {
            let list = r_items
            list.splice(index, 1)
            setR_items(list)
            list = items
            setItems([...list, item])
            setClickKey(-1);
            setClickIndex(-1);


        }
        console.log(clickKey);
    }
    //按钮
    function Btn() {
        return (
            <div>
                <div className='button-17' 
                style={{
                    position: 'absolute',
                    paddingLeft: 5,
                    marginTop: 20,
                    marginLeft: '50%',
                    // width: '1%',
                    fontSize: 20,
                    borderWidth: 1,
                    borderColor: '#C0C0C0',
                    // backgroundColor: '#1E90FF',
                    borderRadius: 5,
                    borderStyle: 'solid',
                    fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
                    boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0',
                }} 
                onClick={() => btnLeft()}>》
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
                    // backgroundColor: '#4CAF50',
                    borderRadius: 5,
                    borderStyle: 'solid',
                    fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
                    boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0',
                
                }} onClick={() => btnRight()}>《
                </div>

            </div>

        );
    }
    //按钮事件
    function btnLeft() {//右移
        if (clickKey != -1) {
            console.log(clickKey);
            let exist = 0;
            for (let i = 0; i < r_items.length; i++) {//遍历判断是否已经存在
                if (r_items[i] == clickKey)
                    exist = 1;
            }
            console.log(exist);
            if (!exist) {
                let list = [...items];
                list.splice(clickIndex, 1);
                setItems(list);
                list = [...r_items]
                setR_items([...list, clickKey]);
                setClickKey(-1);
            }
        }
    }
    function btnRight() {//左移
        if (clickKey != -1) {
            console.log(clickKey);
            let exist = 0;
            for (let i = 0; i < items.length; i++) {//遍历判断是否已经存在
                if (items[i] == clickKey)
                    exist = 1;
            }
            if (!exist) {
                let list = r_items
                list.splice(clickIndex, 1)
                setR_items(list)
                list = items
                setItems([...list, clickKey])
                setClickKey(-1);
            }
        }



    }
    useEffect(() => {
        // console.log(items);
        // console.log(r_items);
        props.getItems(r_items)
        // infoRef.current=r_items
    }, [items, r_items])
    return (
        <div>
            <div style={{
                position: 'absolute',
                marginTop: 20,
                height: 80,
                width: '10%',
                textAlign: 'center',
                borderRadius: 10, // 添加圆角
                // backgroundColor: '#F0F0F0', // 添加背景色
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // 添加阴影
                border: '2px solid #C0C0C0', // 更改边框样式
                left: props.list ? '55%' : '35%',
            }}>
                {listItems}
            </div>
            <div style={{
                position: 'absolute',
                marginTop: 20,
                height: 80,
                width: '10%',
                textAlign: 'center',
                borderRadius: 10,
                // backgroundColor: '#F0F0F0',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                border: '2px solid #C0C0C0',
                left: props.list ? '35%' : '55%',
            }}>
                {r_listItems}
            </div>

            <Btn></Btn>
        </div>
    );
}
export default List;

