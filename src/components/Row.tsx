import React, {useEffect, useState} from "react";
import {Cell} from "./Cell";
import {IRecord} from "../types";

type IProps = {
    input: string,
    item: IRecord,
}

const Component = ({input, item}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(input.toLowerCase() === item.name.toLowerCase()) setIsOpen(true);
    }, [input,item])

    useEffect(()=>{
        console.log(isOpen)
    },[isOpen]);

    return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                height: '3vh'
            }}>
                <Cell isHelper={false} hidden={false} content={item.position}/>
                <Cell isHelper={false} hidden={!isOpen} content={item.name}/>
                <Cell isHelper={true} hidden={!isOpen} content={item.country}/>
                <Cell isHelper={true} hidden={!isOpen} content={item.rating}/>
                <Cell isHelper={true} hidden={!isOpen} content={item.age}/>
            </div>
    )
}

export const Row = React.memo(Component)
