
const Header = ({ left, center, right, children }) => {    
    return (
        <div className="flex flex-col h-screen w-screen max-h-screen max-w-screen">
            <div className="flex p-2 bg-blue-500 text-white h-12 font-bold text-lg">
                <div className="flex flex-1 justify-start items-center">
                    {left}
                </div>

                {(center)
                    ?
                    <div 
                    id="header-center"
                    className="flex flex-1 justify-center items-center">
                        {center}
                    </div>
                    :
                    <div></div>

                }
                <div className="flex flex-1 justify-end items-center">
                    {right}
                </div>
            </div>
            <div className="flex flex-1
            flex-col overflow-hidden
            ">
                {children}
            </div>



        </div>
    );
}

export default Header;