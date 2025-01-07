interface topViewImg {
    topImg: string;
}

export const TopImgsView: React.FC<topViewImg> = ({ topImg }) => {

    return (
        <div><img src={topImg} className="w-full" />
        </div>
    )
}