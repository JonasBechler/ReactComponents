const ColorInput = ({ color, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='flex items-center'>

            <input
                type="color"
                value={color}
                onChange={handleChange}
            />
        </div>
    );
}

export default ColorInput;
