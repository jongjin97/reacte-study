import React, {useState} from "react";

function useConter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decresaseCount = () => setCount((count) => Math.max(0, count - 1));

    return [count, increaseCount, decresaseCount];
}

export default useConter;