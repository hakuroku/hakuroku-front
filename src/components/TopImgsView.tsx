interface topViewImg {
    topImg: string;
}

export const TopImgsView: React.FC<topViewImg> = ({ topImg }) => {

    return (
        <div className="animate-fade-out"><img src={topImg} className="w-full" /></div>
    )
}