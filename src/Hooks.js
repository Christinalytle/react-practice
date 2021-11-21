import React, { useState, useEffect} from "react"

// function Hooks() {
//     const [answer] = useState("Yes")  //first value is an array, second is a function,

//     return (
//         <div>
//             <h1>Is state important to know? {answer}</h1>
//         </div>
//     )
// }

// class Hooks extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

function Hooks() {
    const [count, setCount] = useState(0); 
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
           // setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    
    useEffect(() => {
        setColor(randomColor())
    }, [count])

    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color2 = '#';
        for (var i = 0; i < 6; i++) {
          color2 += letters[Math.floor(Math.random() * 16)];
        }
        return color2;
      }
    
    
    return(
        
         <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
         </div>
    
    )
}

export default Hooks