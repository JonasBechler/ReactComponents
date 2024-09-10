const Header = ({ left, center, right, children }) => {
    return (
        <div className="flex flex-col">
            <div className="flex p-2 bg-blue-500 text-white">
                <div className="flex flex-1 justify-start items-center">
                    {left}
                </div>
                <div className="flex flex-1 justify-center items-center">
                    {center}
                </div>
                <div className="flex flex-1 justify-end items-center">
                    {right}
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header;