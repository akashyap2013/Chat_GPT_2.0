import { BiNavigation } from "react-icons/bi";

export default () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-0 h-40 text-gray-50 bg-gradient-to-t from-gray-800">
            <div className="grid grid-cols-6 absolute bottom-10 w-full">
                <div className="col-start-2 col-span-6 flex justify-center items-center w-full">
                    <div className=" w-2/3 px-5 bg-gray-800 border border-gray-700 rounded-lg flex items-center">
                        <form className="flex w-full shadow-2xl">
                            <input type="text"
                                className="w-full py-3 bg-transparent focus:outline-none text-lg"
                                autoFocus="autofocus"
                                placeholder="What are you looking for?"
                            />
                            <button type="submit">
                                <BiNavigation className="text-2xl hover:text-[#10a37f]"></BiNavigation>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}