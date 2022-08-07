import React, { useContext, useEffect, useState } from "react"

function Prog1() {
    let [age, setAge] = useState(20)
    let [sib, setSib] = useState(1)

    function getold() {
        setAge(age + 1)
    }
    function getsib() {
        setSib(sib + 1)
    }

    let [count, setCount] = useState(0)

    useEffect(() => {
        document.title = "He is " + age
    })

    let [state, setState] = useState({
        age : 20,
        sib : 1
    })

    let changeAge = () => {
        setState(prev => {
            return {
                ...prev, age : prev.age + 1
            }
        })
    }

    let changeSib = () => {
        setState(prev => {
            return {
                ...prev, sib : prev.sib + 1
            }
        })
    }

    const ThemeContext = React.createContext('light');
    const ColorContext = React.createContext('white');

    const theme = useContext(ThemeContext);
    const color = useContext(ColorContext);


    return <>
        <h3>PROGRESSION 1 | UPDATE STATE USING useState</h3>
        <p>The age is {age} years old</p>
        <button onClick={getold}>Get Older!</button>
        <h3>PROGRESSION 2 | MULTIPLE STATE</h3>
        <p>There are {sib} Siblings.</p>
        <h3>PROGRESSION 3 | USE OBJECT STATE</h3>
        <p>The age is {state.age} years old</p>
        <p>There are {state.sib} Siblings.</p>
        <button onClick={changeAge}>Get Older!</button>
        <button onClick={changeSib}>Get more Siblings!</button>
        <h3>PROGRESSION 4 | INITIALIZE STATE FROM FUNCTION</h3>
        <p>Count value is :: {count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Plus (+)</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Minus (-)</button>
        <h3>PROGRESSION 5 | useEffect</h3>
        <p>The Title changes on each updation.</p>
        {/* <h3>PROGRESSION 6 | useContext</h3> */}
        {/* <button onClick={Display}>Display Div</button> */}
        <h3>PROGRESSION 6 | useContext</h3>
        <p>Theme context is :: {theme}</p>
        <p>Color context is :: {color}</p>
    </>
}


export { Prog1 }