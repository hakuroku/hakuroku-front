interface Title {
    title: string
}

export const SelectBar: React.FC<Title> = ({title}) => {
    return (
        <>
        <div className="bg-white hover:bg-gray-200 text-center w-60 hover:cursor-default ">{title}</div>
        </>
    )
}