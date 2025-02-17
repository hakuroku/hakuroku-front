import { useState } from "react";
import { FormAddIcon } from "../utils/FormAddIcon";
import { FormChangeIcon } from "../utils/FormChangeIcon";
import { FormDeleteIcon } from "../utils/FormDeleteIcon";
export const DashBoard = () => {
    const [formIconActive, setFormIconActive] = useState(1)

    return (
        <>
        <ul className="flex justify-center gap-8 text-white text-xl">
            <li onClick={() =>setFormIconActive(1)}>追加</li>
            <li onClick={() =>setFormIconActive(2)}>編集</li>
            <li onClick={() =>setFormIconActive(3)}>削除</li>
        </ul>
        {formIconActive === 1 ? <FormAddIcon /> : null}
        {formIconActive === 2 ? <FormChangeIcon/> : null}
        {formIconActive === 3 ? <FormDeleteIcon/> : null}
        </>
    )
}