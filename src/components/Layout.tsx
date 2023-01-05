import React, {useState} from "react";
import {RatingList} from "./RatingList";
import {IRecord} from "../types";

const Component = () => {
    const [month, setMonth] = useState('')
    const [ratingList, setRatingList] = useState<IRecord[]>([])
    const [input, setInput] = useState('')

    const getRandomMonth = async () => {
        setInput('')
        const response = await fetch('data.json');
        const json = await response.json();
        const randomNumber = Math.floor(Math.random() * json.length)
        const date = new Date(json[randomNumber].month);
        const month = date.toLocaleString('default', {year: 'numeric', month: 'long' });
        setMonth(month)
        setRatingList(json[randomNumber].records);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <button style={{
                padding: '10px',
                borderRadius: '0.5rem',
            }} onClick={getRandomMonth}>Load random month</button>
            <input style={{
                padding: '10px',
                borderRadius: '0.5rem',
            }} placeholder={'Type family here'} onChange={handleInputChange} type="text" value={input}/>
            <h3 style={{color: 'white'}}>{month}</h3>
            <RatingList input={input} list={ratingList}/>
        </div>
    )
}

export const Layout = React.memo(Component)
