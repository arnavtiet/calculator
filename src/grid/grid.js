import React from 'react';
import Button from '../buttons/button';
import './grid.css'
import { CgInsertAfter } from "react-icons/cg";

function MyComponent() {
  return (

    <div className='main'>

        <div className="display">
            <form>
                <input type='text'/>
            </form>


        </div>
        <div className="grid">
            <Button val="AC" type="grey" />
            <Button val={<CgInsertAfter />} type="grey"/>
            <Button val="%"  type="grey"/>
            <Button val="\" type="yellow" />
        </div>

        <div className="grid">
            <Button val="7" type="normal"/>
            <Button val="8" type="normal"/>
            <Button val="9" type="normal" />
            <Button val="X" type="yellow" />
        </div>

        <div className="grid">
            <Button val="4"type="normal" />
            <Button val="5" type="normal"/>
            <Button val="6" type="normal" />
            <Button val="-"  type="yellow"/>
        </div>

        <div className="grid">
            <Button val="1" type="normal" />
            <Button val="2" type="normal"/>
            <Button val="3" type="normal"/>
            <Button val="+" type="yellow"/>
        </div>

        <div className="grid">
            <Button val="0" type="long" />
            
            <Button val="."  type="normal"/>
            <Button val="="  type="yellow"/>
        </div>
    </div>
    
  );
}

export default MyComponent;