import React, { useState } from "react";

function Notes() {
    const [value,setValue] = useState('');
    const [notes, setNotes] = useState([]);
    function handleChange(e){
        setValue(e.target.value);
    }
    function handleClick(){
        setNotes((preValue)=>[
            ...preValue,
            [value]
        ]);
        setValue('');
    }
    function deleter(id){
        setNotes((preValue)=>{
            return preValue.filter((items,index)=>{
                return index !==id
            })
        })
    }
    return (
        <div>
            <div class="form-box">
                <input type="text" onChange={handleChange} placeholder="Take a note..." value={value}/>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            {notes.map((element,index)=>{
                return <div className="display" key={index} >
                <p>{element}
                </p>
                <button onClick={()=>{
                    deleter(index)
                }}>Delete</button>
            </div>
            })}
            
        </div>
    )
}

export default Notes;