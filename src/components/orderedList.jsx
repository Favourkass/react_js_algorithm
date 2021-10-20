import React, {useState} from 'react'

function OrderedList() {
    const [list, setList] = useState([])
    const [input, setInput] = useState('')
    const [direction, setDirection] = useState("down")

    const handleChange = (e) => {
        setInput(e.target.value)

    }
    const handleClear = () => {
        setInput('')
        setList([])
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            setList([...list, input])
            setInput('')
        }   
    }

    const handleToggle = () => {
        direction ==="up"? setDirection("down") : setDirection("up")
    }

    console.log(list)
    
    return (
        <>
            <input type="text" value={input} onChange={handleChange} onKeyDown={handleKeyDown}/>
            
             <button onClick={handleToggle} className="sort-direction" >{direction === "up"?"⬇️":"⬆️"}</button>
            <button onClick={handleClear} className="clear-list">️🆑</button>
            <ul>{direction === "up" && list.sort().reverse().map((item, index) => <li key={index}>{item}</li>)}
            {direction === "down" && list.sort().map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default OrderedList
