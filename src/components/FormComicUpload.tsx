interface setTitle {
    setComicTitle: (comicTitle: string) => void;
    item: string;
}

export const FormComicUpload: React.FC<setTitle> = ({setComicTitle, item}) => {
    return(
        <p><label ><span className="text-white">{item}</span><input type="text" name="comic_title" className="mb-3 p-1 h-6 w-60 outline-none" onChange={(e) => setComicTitle(e.target.value)} /></label><br /></p>
    )
}