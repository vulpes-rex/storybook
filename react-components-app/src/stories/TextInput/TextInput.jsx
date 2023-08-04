import { useState } from "react";
import PropTypes from "prop-types";

const TextInput = ({name, label, type, placeholder}) => {
    const [value, setValue] = useState('');
    const handleOnChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value}
                onChange={handleOnChange}
                placeholder={placeholder} />
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextInput;