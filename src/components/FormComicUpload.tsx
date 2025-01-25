interface setState {
    setState: (s: string) => void;
    item: string;
    text: string
}

export const FormComicUpload: React.FC<setState> = ({setState, item, text}) => {
    return(
        <div className="flex justify-end items-center mb-3">
            <label ><span className="font-serif w-1/3 text-right pr-2">{item}</span></label>
            <input type="text" name="comic_title" autoComplete="off" placeholder={text} className=" py-1 px-2 h-8 w-2/3 outline-none bg-gray-100 border-b-2 rounded-sm" onChange={(e) => setState(e.target.value)} /><br />
        </div>
    )
}