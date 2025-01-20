 interface setState {
    setState: (s: string) => void,
    item: string;
}

export const TextareaComicUpload: React.FC<setState> = ({setState, item}) => {
    return (
        
        <p><label ><span className="text-white">{item}</span><input type="text" name="comic_title" className="mb-3 p-1 h-6 w-60 outline-none" onChange={(e) => setState(e.target.value)} /></label><br /></p>
        
    )
}