import { StateActive } from "../types/stateActive";

interface ModalFC {
    setModal: (s: StateActive) => void;
}

export const ModalBack: React.FC<ModalFC> = ({ setModal }) => {
    return (
        <>
            <div className="w-full h-screen bg-black/75 inset-0 fixed z-10" onClick={() => { setModal(false); }}></div>
        </>
    )
}