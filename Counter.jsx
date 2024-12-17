import { useState } from 'react';
export default function Counter() {
    function incfun() {
        cntFun(counter + 1);
    };
    function dcfun() {
        cntFun(counter - 1);
    };
    function setzz() {
        cntFun(0);
    };
    const [counter, cntFun] = useState(0);
    return (
        <div className='all'>
            <p className="component">Counter:{counter}</p>
            <button className="btn" onClick={incfun}>increment</button>
            <button className="btn" onClick={setzz}>reset</button>
            <button className="btn" onClick={dcfun}>decrement</button>
        </div>


    );
}