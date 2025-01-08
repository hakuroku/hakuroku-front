interface topViewImg {
    topImg: string;
}

export const TopImgsView: React.FC<topViewImg> = ({ topImg }) => {

    return (
        <div className="animate-fade-out h-full bg-gray-200"><img src={topImg} className="object-cover w-full h-full" /></div>
    )
}