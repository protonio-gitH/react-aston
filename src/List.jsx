import { useState } from "react";


const List = function() {
    const [list, setList] = useState([1,2,3,4,5,6,7,8])

    return (
        <>
            {list.map((item,index) => 
                <div key={index}>{item}</div>
            )}
        </>
    )
}

export default List;