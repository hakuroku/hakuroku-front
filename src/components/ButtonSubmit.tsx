interface Button {
    text: string;
}
export const ButtonSubmit: React.FC<Button> = ({text}) => {
    return(
        <>
        <div className='px-7 py-2 bg-accent_C rounded-lg hover:bg-accent2_C'><span className="text-white">{text}</span></div>
        </>
    )
}