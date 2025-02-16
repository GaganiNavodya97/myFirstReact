import { useState } from "react";

interface Props {
    items: string [];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup ({items, heading, onSelectItem}:Props){
    //hook
    const [selectedItem, setSelectedItem] = useState(-1);
    return (
        <>
            <h1>{ heading}</h1>
            {items.length === 0 && <p>item not found</p>}
            <ul className="list-group">
                {items.map((item, index) => (  
                    <li key={item} className={ selectedItem === index? 'list-group-item active' :'list-group-item'} onClick={()=>{setSelectedItem(index); onSelectItem(item);}}>{ item }</li>
                ))}
            </ul>
        </>
    )
}
export default ListGroup;