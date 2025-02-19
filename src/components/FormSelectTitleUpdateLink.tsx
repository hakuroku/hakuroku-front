
interface Item {
    item: string;
    setState: (n:number) => void
}
export const FormSelectTitleUpdateLink: React.FC<Item> = ({item, setState}) => {
    return (
        <>
            <p className="text-center">{item}<input type="number" name="addIconSeriesId" onChange={(e) => setState(Number(e.target.value))} /><br /></p>
        </>
    )
}