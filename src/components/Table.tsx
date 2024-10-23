import React from "react";

interface TableProps {
    tableTitle: string;
    items: { id: number; name: string }[];
    handleClick?: (item: {id: number, name: string}) => void;
    handleDelete: (id: number) => void;
}

const Table: React.FC<TableProps> = ( {tableTitle, items, handleClick, handleDelete}) => {
    return (
        <div>
            <h2>{tableTitle}</h2>
            {items.length > 0 ? (
                items.map(item => (
                    <div key={item.id} onClick={() => handleClick && handleClick(item)}>{item.name}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
                )
            )
             : ""}
        </div>
    )
}

export default Table;