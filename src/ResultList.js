import { useState } from 'react';
function ResultList(props) {
    const { items, r_items } = props;
    const [t_display, setT_display] = useState(0)//结果 可见1 不可见0
    const [text, setText] = useState([])

    function listItems() {
        let list = []//每次点ok从r_items读出
        r_items.map((item, index) => {
            let newItem = "This is Para " + item + '\n';
            if (index == r_items.length - 1) {
                newItem = "This is Para " + item;
            }
            list = list + newItem
            console.log(list);
        }
        )
        setText(list)
    }
    function Btn() {
        return (
            <div style={{
                position: 'absolute',
                padding: 5,
                marginTop: 140,
                textAlign: 'center',
                marginLeft: '49.5%',
                width: '2%',
                fontSize: 20,
                borderWidth: 1,
                borderColor: '#C0C0C0',
                backgroundColor:'rgb(76, 175, 80)',
                borderRadius: 5,
                borderStyle: 'solid',
                boxShadow: '2px 2px 4px grey'
            }} onClick={() => clickOk()} readOnly>OK
            </div>
        )
    }
    const clickOk = () => {
        // testtext="123"
        setText(r_items)
        listItems()
        setT_display(1);
    }
    return (
        <div>
            
            <textarea
                style={{
                    position: 'absolute',
                    width: '30%',
                    padding: 5,
                    height: 80,
                    marginTop: 200,
                    marginLeft: '35%',
                    borderColor: '#C0C0C0',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    display: t_display ? 'block' : 'none',
                    borderRadius: 5,
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#333',
                    backgroundColor: '#FFF',
                    outline: 'none',
                    resize: 'none',
                    overflow: 'auto',
                    whiteSpace: '-o-pre-wrap',
                    transition: 'all 0.3s ease',
                    transitionProperty: 'box-shadow, border-color'
                }}
                value={text}
                
            />

            <Btn></Btn>
        </div>

    );
}
export default ResultList;