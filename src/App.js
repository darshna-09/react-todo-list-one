import React from "react";
import Todolist from "./Todolist";

// const App = () => {
//     const [inputlist,setInputList] = useState("Buy Apple");
//     const [Items,setItems] = useState([]);
    
//     const itemEvent = (event) =>{
//         setInputList(event.target.value);
//     }
//     const listOfItem = (event) => {
//         setItems((oldItems) => {
//             return [...oldItems, inputlist];   
//         });
//         setInputList("");      
//     }
//     const deleteItems = (id) => {
//         console.log("deleted");
//         setItems((oldItems) => {
//             return oldItems.filter((arrElem, index) => {
//                 return index !== id;
//             });
//         });
//     }
//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br/>
//                     <h1> ToDo List1</h1>
//                     <br/>
//                     <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputlist}/>
//                     <button onClick={listOfItem}>+</button>
                    
//                     <ol>
//                         {/* <li>{inputlist}</li> */}
//                         {Items.map((itemval,index) => {
//                            return <Todolist 
//                         key = {index}
//                         id = {index}
//                         text={itemval}
//                         onSelect = {deleteItems}
//                         />;
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </>
//     );
// }

const App = () => {
    return <Todolist />
}
export default App;