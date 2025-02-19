import { BackToTop } from "../components/BackToTop"
import { Degical } from "../components/Degical"

export const NotFound = () => {
    return (
        <div className="text-white text-center h-[80vh]">
            <div className="pt-[20vh] mb-6">
                <p>お探しのページは見つかりませんでした。</p>
                <p>以下のリンクから改めて作品をお探しください。</p>
            </div>
            <BackToTop position={'center'}/>

            <div className="flex justify-around px-8">
                <Degical/>
                <Degical/>
            </div>
        </div>
    )
}