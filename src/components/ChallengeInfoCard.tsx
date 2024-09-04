
interface ChallengeCardProps{
    img: string,
    text1: string,
    text2: string
}

const ChallengeCard : React.FC<ChallengeCardProps> = ({img, text1, text2}) => {
    
    return(
        <>
            <div className="p-8 bg-[#F8F9FD]">
                <img src={img} />
                <p className="my-1 text-xl font-bold">{text1}</p>
                <p className="my-1 text-sm">{text2}</p>
            </div>
        </>
    )
}

export default ChallengeCard