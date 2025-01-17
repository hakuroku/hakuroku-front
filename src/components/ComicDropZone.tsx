import { useRef } from "react";
import { usePostData } from "../hooks/dataStore";
import { dropHandler, dragOverHandler, addFiles } from "../utils/addFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'


export const ComicDropZone = () => {
    const {comic_content ,setComicContent} = usePostData();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const deleteFile = (index: number): File[] | null => {
        if (comic_content) {
            const newComicContent = [...comic_content]
            newComicContent.splice(index, 1)
            return newComicContent
        } return null
        
    } 

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }
    
    if (comic_content === null || comic_content?.length === 0) {
        return (
            <div>
                <div className="border-2 border-white h-52 bg-white my-3" onDrop={(e)=> setComicContent(dropHandler(e, comic_content))} onDragOver={(e)=> dragOverHandler(e)}>

                    <div className="bg-accent_C hover:bg-accent2_C px-16 py-4 rounded-full text-white hover:text-gray-200 text-xl flex gap-2 items-center mx-auto mt-16 w-fit hover:cursor-pointer" onClick={handleButtonClick}>
                        <p>画像を追加</p>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </div> 
                </div>
                <input type="file" ref={fileInputRef} name="comic_content[]" multiple accept=" .jpg, .pdf " className="mb-10 text-white hidden" id="comics-create_field"  onChange={(e) => setComicContent(addFiles(e.target.files, comic_content))} /><br />
            </div>
        )
    } else if (comic_content.length === 1) {
        return (
            <div>
                <div className="border-2 border-white h-[800px] bg-white my-3" onDrop={(e)=> setComicContent(dropHandler(e, comic_content))} onDragOver={(e)=> dragOverHandler(e)}>
                    
                    {comic_content.map((file, index) => {
                        const fileURL = URL.createObjectURL(file);
                        return (
                          <div className="bg-gray-200 w-[600px] m-auto px-20 pb-10 pt-20 flex my-[32px] relative">
                            <div className="bg-black h-fit absolute top-6 right-6 px-3 py-1 rounded-full hover:cursor-pointer hover:opacity-60" onClick={() => { setComicContent(deleteFile(index)) }}><FontAwesomeIcon icon={faXmark} size="5x" color="white" /></div>
                            <img src={fileURL} alt={`image-${index}`} className="m-auto border-2 border-black"/>
                          </div>  
                        );
                    })}

                </div>
                <p className="text-white text-xl mb-10">{comic_content.length}ファイル</p>
                <input type="file" name="comic_content[]" multiple accept=".jpg,.pdf" className="mb-10 text-white hidden" id="comics-create_field"  onChange={(e) => setComicContent(addFiles(e.target.files, comic_content))} /><br />
            </div>
        )
    } else if (comic_content.length > 1) {
        return (
            <div>
            <div className="border-2 border-white h-fit bg-white my-3 flex flex-wrap gap-2" onDrop={(e)=> setComicContent(dropHandler(e, comic_content))} onDragOver={(e)=> dragOverHandler(e)}>
            {comic_content.map((file, index) => {
                        const fileURL = URL.createObjectURL(file);
                        return (
                            <div>
                                <div className="bg-gray-200 w-[200px] m-auto px-4 pb-2 pt-4 flex my-[32px] relative">
                                    <div className="bg-black h-fit absolute top-2 right-2 px-1 rounded-3xl hover:cursor-pointer hover:opacity-60" onClick={() => { setComicContent(deleteFile(index)) }}><FontAwesomeIcon icon={faXmark} size="2x" color="white"/></div>
                                    <img src={fileURL} alt={`image-${index}`} className="m-auto border-2 border-black"/>
                                </div> 
                            </div> 
                        );
                    })}
            </div>
            <p className="text-white text-xl mb-10">{comic_content.length}ファイル</p>
                
                <input type="file" name="comic_content[]" multiple accept=".jpg,.pdf" className="mb-10 text-white hidden" id="comics-create_field"  onChange={(e) => setComicContent(addFiles(e.target.files, comic_content))} /><br />
            </div>
        )
       
    }
    
}