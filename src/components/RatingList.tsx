import React from "react";
import {Row} from "./Row";
import {IRecord} from "../types";
import {Cell} from "./Cell";


type IProps = {
    input: string,
    list: IRecord[],
}

const Component = ({input, list}: IProps) => {
    return (
        list.length ? <div style={{
            width: '50vw',
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '1rem',
            color: "white",
            padding: '1rem',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                height: '2rem'
            }}>
                <Cell isHelper={false} hidden={false} content={'Position'}/>
                <Cell isHelper={false} hidden={false} content={'Name'}/>
                <Cell isHelper={false} hidden={false} content={'Country'}/>
                <Cell isHelper={false} hidden={false} content={'Rating'}/>
                <Cell isHelper={false} hidden={false} content={'Age'}/>
            </div>
            {list.map(item => (
                <Row key={`${item.position}-${item.name}`} input={input} item={item}/>
            ))}
        </div> : null
    )
}

export const RatingList = React.memo(Component)
