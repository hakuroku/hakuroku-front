import { useState } from "react"

interface ComicViewerProps {
    episode: { pages: string[] }
}

export const ComicViewer: React.FC<ComicViewerProps> = ({episode}) => {
    const [currentPage, setCurrentPage] = useState(0);

    console.log(episode)
    const goToNextPage = () => {
        if (currentPage < episode.pages.length - 1) {
            setCurrentPage(currentPage + 2);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage -2);
        }
    }

    const pagesLength = episode.pages.length;
    const progressPercentage = Math.min((currentPage/pagesLength) * 100, 100);

    console.log(pagesLength)
    console.log(episode.pages[currentPage])
    return (
        <div>
            <div className="relative bg-black">
                <div className="flex justify-center h-screen ">
                    
                    {currentPage > pagesLength - 1 ? null : <img src={episode.pages[currentPage]} alt={`Page ${currentPage - 1}`} />}
                    
                    {currentPage === 0 ? null : <img src={episode.pages[currentPage - 1]} alt={`Page ${currentPage}`}/>}
                    
                </div>
                <div className="flex justify-around border-2 border-gray-100 ">
                    <div onClick={() => {goToNextPage()}}  className="h-full w-1/4 text-4xl absolute top-[0] left-[0] flex hover:cursor-pointer"><img src="./images/allow-left.svg" alt="" className="w-10 "/></div>
                    <div onClick={() => {goToPrevPage()}} className="h-full w-1/4 absolute top-[0] right-[0] flex hover:cursor-pointer"><img src="./images/allow-right.svg" alt="" className="w-10 ml-auto"/></div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                
                <div className="w-full bg-black rounded-xl">
                    <div className=" h-[8px] bg-main_C rounded-xl" style={{
                        width: `${progressPercentage}%`,
                        }}>
                    </div>
                </div>
                
                <div className="w-fit">
                    {(currentPage + 1) > episode.pages.length ?
                        <p className="p-3 bg-gray-100 text-4xl ">&lt;{currentPage}/{pagesLength}&gt;</p> :
                        <p className="p-3 bg-gray-100 text-4xl ">&lt;{currentPage + 1}/{pagesLength}&gt;</p>
                    }
                </div>
                
                
            </div>
        </div>
    )
}