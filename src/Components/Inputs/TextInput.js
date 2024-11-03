
import { clickable_classnames } from "../BaseStyles";
const TextInput = ({ id, type, placeholder, value, setValue }) => {
    
    const RegEx = {
        is_int: "^([0-9]+)?$",
        is_float: "^[+-]?([0-9]+([.,][0-9]*)?|[.,][0-9]+)?$",
        is_ip: "^[0-9]{0,3}([.][0-9]{0,3})?([.][0-9]{0,3})?([.][0-9]{0,3})?$",
        is_string: "^(.*)$",
    }
    
    const regex_from_type = (type) => {
        if (type === "int") {
            return RegEx.is_int;
        }
        else if (type === "float") {
            return RegEx.is_float;
        }
        else if (type === "ip") {
            return RegEx.is_ip;
        }
        else if (type === "string") {
            return RegEx.is_string;
        }
        else {
            return RegEx.is_string;
        }
    }

    const handleChange = (event) => {
        let new_value = event.target.value;
        if (new_value.match(regex_from_type(type)) != null) {
            if (type === "float") {
                new_value = new_value.replace(",", ".");
            }
            setValue(new_value);
        }
    }




    return (
            <div className="flex flex-1 align-center justify-center">
                <input
                    className={`
                    w-full 
                    rounded-md 
                    pl-[25px] 
                    text-lg 
                    h-8
                    `+ clickable_classnames}
                    type="text"
                    id={"input_" + id}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
    );
}

export default TextInput;