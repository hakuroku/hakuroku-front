import { BackToTop } from "../components/BackToTop"

export const NotFound = () => {
    return (
        <div className="text-white text-center h-[80vh]">
            <div className="pt-[20vh] mb-6">
                <p>お探しのページは見つかりませんでした。</p>
                <p>以下のリンクから改めて作品をお探しください。</p>
            </div>
            <BackToTop />

            <div className="flex justify-between px-8">
                <img src="./images/デジカル君1.png" alt="" />
                <img src="./images/デジカル君1.png" alt="" />
            </div>
        </div>
    )
}