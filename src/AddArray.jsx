import { useState } from "react";
function AddArray() {
    const [items, setItems] = useState([]);
    return(<>

        {items.toString()}
        <div>
            <button onClick={() =>
            setItems((prevItems) => ([...prevItems, "+1"]))
          }>ADD +1</button>
        </div>
        </>
    );
}
export default AddArray;

