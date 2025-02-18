import { useState } from "react";
import { FormAddIcon } from "../utils/FormAddIcon";
import { FormChangeIcon } from "../utils/FormChangeIcon";
import { FormDeleteIcon } from "../utils/FormDeleteIcon";
import { useModalIcon} from "../hooks/activeUIStore";
export const DashBoard = () => {
    const [formIconActive, setFormIconActive] = useState(1)
    const {modalAddIcon, modalChangeIcon, modalDeleteIcon, setModalAddIcon, setModalChangeIcon, setModalDeleteIcon} = useModalIcon()

    return (
        <>
        <ul className="flex justify-center gap-8 text-white text-xl">
            <li className="hover:cursor-pointer" onClick={() =>setModalAddIcon(true)}>追加</li>
            <li className="hover:cursor-pointer" onClick={() =>setModalChangeIcon(true)}>編集</li>
            <li className="hover:cursor-pointer" onClick={() =>setModalDeleteIcon(true)}>削除</li>
        </ul>
        {modalAddIcon ? <FormAddIcon /> : null}
        {modalChangeIcon ? <FormChangeIcon/> : null}
        {modalDeleteIcon ? <FormDeleteIcon/> : null}
        </>
    )
}