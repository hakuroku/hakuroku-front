export const dragOverHandler = (e: React.DragEvent<HTMLDivElement>):void => {
    console.log('File(s) in drop zone')
    e.preventDefault();
}

export const dropHandler = (e: React.DragEvent<HTMLDivElement>, t: File[] | null): File[] | null => {
    console.log('File(s) dropped');
    e.preventDefault()
    const data = e.dataTransfer?.files;
    // console.log(data)
    if (data){
        const ContentArray = addFiles(data, t)
        return ContentArray
    } return null
}

export const addFiles = (newFiles: FileList | null, t: File[] | null): File[] | null => {
    if (newFiles) {
        const AllowedTypes = ['image/jpeg', 'application/pdf']; //jpeg と pdf の MIMEタイプ
        const newFilesArray = Array.from(newFiles).filter(file => AllowedTypes.includes(file.type));
        //フィルタリングしたファイルのみ追加
        const result = (prevFiles: File[] | null): File[] => {
            return prevFiles ? [...prevFiles, ...newFilesArray] : newFilesArray;
        };
        return result(t)
    } return null
};