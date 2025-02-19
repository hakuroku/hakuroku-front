import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const FormSearch = () => {
    const navigate = useNavigate();

    const search = () => {
        navigate('/search')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        search();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="search" className="border-2 outline-none px-1" />
                <button className="px-1 border-2 bg-white" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </>
    )
}