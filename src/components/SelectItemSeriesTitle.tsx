import { SelectBar } from "./SelectBar"

interface Value {
    title: string
}
export const SelectItemSeriesTitle: React.FC<Value> = ({title}) => {
    return(
        <>
        <SelectBar title={title} />
        </>
    )
}