interface topIconImg {
    iconImg: string;
}

export const ListContainer: React.FC<topIconImg> = ({iconImg}) => {

    return (
            <div className="border-2 w-16 h-64 overflow-hidden shadow-xl" id="comic-icon_frame" ><img src={iconImg} className="size-full" /></div>
    )
}