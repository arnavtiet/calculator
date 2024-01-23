import React from 'react';
import Button from '../buttons/button';
import './grid.css'

function MyComponent() {
  return (

    <div className='main'>

        <div className="display">
            <form>
                <input type='text'/>
            </form>


        </div>
        <div className="grid">
            <Button val="1" />
            <Button val="1" />
            <Button val="1"  />
            <Button val="1"  />
        </div>

        <div className="grid">
            <Button val="1" />
            <Button val="1" />
            <Button val="1"  />
            <Button val="1"  />
        </div>

        <div className="grid">
            <Button val="1" />
            <Button val="1" />
            <Button val="1"  />
            <Button val="1"  />
        </div>

        <div className="grid">
            <Button val="1" />
            <Button val="1" />
            <Button val="1"  />
            <Button val="1"  />
        </div>
    </div>
    
  );
}

export default MyComponent;