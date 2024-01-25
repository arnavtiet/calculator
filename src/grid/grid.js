import React from 'react';
//import Button from '../buttons/button';
import './grid.css'
import { CgInsertAfter } from "react-icons/cg";
import { useState } from 'react';
import Button from '../buttons/button';



function MyComponent() {
    const [result,setResult]=useState("");

    const disp=(e) =>
    {

    setResult(result.concat(e.target.name));
    }
   
    const clear=() =>
    {
        setResult(" ");
    }

    const backspace=()=>
    {
        setResult(result.slice(0,-1));
    }

    const calculate=()=>
    {
        try
        {
            setResult(eval(result).toString());
        }

        catch(err)
        {
            setResult("error");
        }
    }
  return (

    <div className='main'>

        <div className="display">
            <form>
                <input type='text' value={result} />
            </form>


        </div>
        <div className="grid">
            <Button val="AC" type="grey"  eve={clear} />
            <Button val="C" type="grey" eve={backspace} />
            <Button val="%"  type="grey" eve={disp} naam="%"/>
            <Button val="\" type="yellow"  eve={disp} naam="/"/>
        </div>

        <div className="grid">
            <Button val="7" type="normal" naam="7"  eve={disp}/>
            <Button val="8" type="normal" naam="8"  eve={disp}/>
            <Button val="9" type="normal"  naam="9"  eve={disp}/>
            <Button val="X" type="yellow"  naam="*"  eve={disp}/>
        </div>

        <div className="grid">
            <Button val="4"type="normal" naam="4"  eve={disp}/>
            <Button val="5" type="normal" naam="5"  eve={disp}/>
            <Button val="6" type="normal"  naam="6"  eve={disp}/>
            <Button val="-"  type="yellow" naam="-"  eve={disp}/>
        </div>

        <div className="grid">
            <Button val="1" type="normal" naam="1"  eve={disp}/>
            <Button val="2" type="normal"naam="2"  eve={disp}/>
            <Button val="3" type="normal" naam="3"  eve={disp}/>
            <Button val="+" type="yellow" naam="+"  eve={disp}/>
        </div>
        <div className="grid">
            <Button val="0" type="long" naam="0"  eve={disp}/>
            
            <Button val="."  type="normal" naam="."  eve={disp}/>
            <Button val="="  type="yellow" eve={calculate}/>
        </div>
    </div>
    
  );
}

export default MyComponent;

