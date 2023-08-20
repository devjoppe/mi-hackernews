import React from "react"
import { hnItemInt } from "../../interfaces/hnInterfaces.interface"
import ListItem from "./ListItem"

interface IProp {
    data: hnItemInt[]
}

const ListLayout:React.FC<IProp> = ({data}) => {
    return (
        <>
            <h3>ListView:</h3>
            <div key={'ListView'}>
                {data.map((item:hnItemInt) => (
                    <ListItem key={item.objectID} itemData={item}/>
                ))}
            </div>
        </>
    )
}

export default ListLayout