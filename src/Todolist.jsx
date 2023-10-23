import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom";
const Todolist = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }
    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem("");
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                        <p className="count1">To Do List</p>
                    <br/>
                    <input type="text" value={item} placeholder="Add a items" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {newitem.map((val,index) => {
                            return <ListCom key={index} text={val} />;
                        })}
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default Todolist;