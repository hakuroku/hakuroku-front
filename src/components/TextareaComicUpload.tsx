 interface setState {
    setState: (s: string) => void,
    item: string;
    text: string;
}

export const TextareaComicUpload: React.FC<setState> = ({setState, item, text}) => {
    return (
        
        <div className="flex justify-end mb-3">
                <p className="py-1"><span className="w-1/3 text-right font-serif pr-2">{item}</span></p>
                <textarea name="comic_title" maxLength={200} placeholder={text} className=" py-1 px-2 h-40 w-2/3 outline-none bg-gray-100 resize-none align-top" onChange={(e) => setState(e.target.value)} /><br />
            </div>
        
    )
}