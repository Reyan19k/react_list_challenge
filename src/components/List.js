import { useState } from "react";

const List = () => {
    const [show, setShow] = useState(true);
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState(false);

    const clickHandler = () => {
        const temp = [...list];
        const tempobj = {"text": input, "checked": false}
        console.log(tempobj)
        temp.push(tempobj);
        setList(temp);
        setInput("");
    };
    const deleteItem = (index) => {
        const temp = [...list];
        temp.splice(index, 1);
        setList(temp);
    };
    const handleCheck = (index) => {
        const temp = [...list];
        temp[index].checked = !temp[index].checked 
        setList(temp);
    };

    return (
        <div id="listContainer">
            <h1>Type here to add to the list</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="buttons">
                <button onClick={clickHandler} >Add to the list</button>
                <button onClick={() => setShow(!show)}>Show / Hide</button>
            </div>
            {show ? <h1>To Do List</h1> : null}
            {show
                ? list.map((item, index) => {
                    return (
                        <div className="lineItem">
                            <input type="checkbox" onClick={() => handleCheck(index)}/>
                        <p key={item.text} className={item.checked ? "clicked" : "unClicked"} >
                            {item.text}
                        </p>
                        <div className="delButton">
                        <button onClick={() => deleteItem(index)}>delete</button>
                        </div>
                        </div>
                    );
                })
                : null}
        </div>
    );
};

export default List;
