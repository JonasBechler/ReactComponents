const MyLabel = ({ children, name, id }) => {

    return (
        <div className='flex w-full wrap'>
            <div className="flex w-1/2 text-center align-center justify-center whitespace-nowrap"
            htmlFor={"input_" + id}>
                {name}
            </div>
            <div className="flex w-1/2 text-center align-center justify-center">
                {children}
            </div>
        </div>
    );

}

export default MyLabel;
