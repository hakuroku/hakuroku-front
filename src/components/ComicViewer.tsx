import { useState } from "react"

interface ComicViewerProps {
    pages: string[]
}

export const ComicViewer: React.FC<ComicViewerProps> = ({pages}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const goToNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 2);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage -2);
        }
    }

    console.log(currentPage)
    return (
        <div>
            <div className="relative bg-lack">
                <div className="flex justify-center h-screen ">
                    <div></div>
                    {currentPage > pages.length - 1 ? null : <img src={pages[currentPage]} alt={`Page ${currentPage - 1}`} />}
                    
                    {currentPage === 0 ? null : <img src={pages[currentPage -1]} alt={`Page ${currentPage}`}/>}
                    
                </div>
                <div className="flex justify-around border-2 border-gray-100 ">
                    <div onClick={() => {goToNextPage()}}  className="h-full w-1/4 text-4xl absolute top-[0] left-[0] flex hover:cursor-pointer"><img src="./images/allow-left.svg" alt="" className="w-10 "/></div>
                    <div onClick={() => {goToPrevPage()}} className="h-full w-1/4 absolute top-[0] right-[0] flex hover:cursor-pointer"><img src="./images/allow-right.svg" alt="" className="w-10 ml-auto"/></div>
                </div>
            </div>
            <div className="text-center">
                
                {(currentPage + 1) > pages.length ?
                    <p  className="p-3 bg-gray-100 text-4xl ">＜{currentPage}/{pages.length}＞</p> : 
                    <p  className="p-3 bg-gray-100 text-4xl ">＜{currentPage + 1}/{pages.length}＞</p>
                }
                
            </div>
        </div>
    )
}