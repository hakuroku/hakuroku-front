import { useModalIcon } from "../hooks/activeUIStore";
import { ButtonUpdateTopLink } from "./ButtonUpdateTopLink";

export const ButtonListTopLink = () => {
    const {setModalAddIcon, setModalChangeIcon, setModalDeleteIcon} = useModalIcon();
    return (
        <>
            <ul className="flex justify-center items-center flex-col text-center gap-8  text-xl mt-8">
                <div onClick={() => setModalAddIcon(true)}><ButtonUpdateTopLink text={'追加'}/></div>
                <div onClick={() => setModalAddIcon(true)}><ButtonUpdateTopLink text={'変更'} /></div>
                <div onClick={() => setModalAddIcon(true)}><ButtonUpdateTopLink text={'削除'} /></div>
            </ul>
        </>
    )
}