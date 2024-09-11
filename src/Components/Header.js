import MyScrollArea from "./MyScrollArea";

const Header = ({ left, center, right, children }) => {
    return (
        <div className="flex flex-1 flex-col h-screen w-screen">
            <div className="flex p-2 bg-blue-500 text-white h-12">
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