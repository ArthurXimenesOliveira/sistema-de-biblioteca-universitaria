import React from "react";
import { Select } from "antd";
// const onChange = (value) => {
//     console.log(`selected ${value}`);
// };
// const onSearch = (value) => {
//     console.log("search:", value);
// };
function CaixaSeletora({options, placeholder, onChange, onSearch}) {
    return (
        <Select
            showSearch={{ optionFilterProp: "label", onSearch }}
            placeholder={placeholder}
            onChange={onChange}
            options={[...options]}
        />
    )
} 
export default CaixaSeletora;
