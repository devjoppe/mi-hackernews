import React from "react"
import { hnItemInt } from "../../interfaces/hnInterfaces.interface"

interface Iprop {
    itemData: hnItemInt
}

const ListItem:React.FC<Iprop> = ({itemData}) => {
    return(
        <div key={itemData.title}>
            {itemData.title}
        </div>
    )
}

export default ListItem