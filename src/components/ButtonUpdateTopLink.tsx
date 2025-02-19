import { StateActive } from "../types/stateActive"

interface Text {
    text: string;
}

export const ButtonUpdateTopLink: React.FC<Text> = ({text}) => {
    return (
        <>
            <div className="bg-accent_C hover:bg-accent2_C px-24 py-2 rounded-md w-fit hover:cursor-pointer">
                <li className="hover:cursor-pointer text-white">{text}</li>
            </div>
        </>
    )
}