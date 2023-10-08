import { forwardRef, useEffect, useRef, useState } from "react";

export default forwardRef(function SelectInput(
    { className = "", isFocused = false, options = [], ...props },
    ref,
) {
    const select = ref ? ref : useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const {selected, setSelected} = useState("");
    return (
        <>
            <select
                {...props}
                className={
                    "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                    className
                }
                ref={select}
                
            >
                <option hidden disabled selected value="" className="text-slate-500">Pilih jenis kelamin</option>
                {options.map((opt, index) => (
                    <option value={opt}>{opt}</option>
                    
                ))}
            </select>
        </>
    );
});
