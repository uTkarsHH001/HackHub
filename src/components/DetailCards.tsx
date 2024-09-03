
interface DetailCardsProps {
    img: string
    text1: string
    text2: string
}

const DetailCards: React.FC<DetailCardsProps> = ({ img, text1, text2 }) => {
    return (
        <div className="w-full w-fit flex items-center space-x-2">
            <img src={img} className="h-10" />
            <div>
                <p className="text-xl font-bold">{text1}+</p>
                <p className="text-xs">{text2}</p>
            </div>
        </div>
    )
}

export default DetailCards
