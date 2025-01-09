// import { usePostData } from "../hooks/dataStore";
import { useState } from "react";

export const ComicDropZone = () => {
    // const {comic_content ,setComicContent} = usePostData();
    const [comicContent2, setComicContent2] = useState< File[] | null>(null);

    const addFiles = (newFiles: FileList | null) => {
        if (newFiles) {
            setComicContent2((prevFiles: File[] | null) => {
                const newFilesArray = Array.from(newFiles);
                return prevFiles ? [...prevFiles, ...newFilesArray] : newFilesArray;

            });

        
        }
    };

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>):void => {
        console.log('File(s) in drop zone')
        e.preventDefault();
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>):void => {
        console.log('File(s) dropped');
        e.preventDefault()
        const data = e.dataTransfer?.files;
        // console.log(data)
        if (data){
            addFiles(data);
        }
        
    }
 
    {console.log(comicContent2)}
    return (
        <div>
            <div className="border-2 border-white h-52 bg-white my-3" onDrop={(e)=> dropHandler(e)} onDragOver={(e)=> dragOverHandler(e)}>
                <p className="">Drop files here</p> 
            </div>
            <input type="file" name="comic_content[]" multiple  className="mb-10 text-white" id="comics-create_field"  onChange={(e) => addFiles(e.target.files)} /><br />
        </div>
    )
}