import img from '../assets/icons/PicsArt_04-14-04.42 1.svg'
import img1 from '../assets/icons/Group 1000002515.svg'
import img2 from '../assets/icons/Group 1000002516.svg'
import img3 from '../assets/icons/Group 1000002518.svg'
import DetailCards from '../components/DetailCards'

const ChallengeList : React.FC = () => {
    
    return(
        <>
            {/* Intro Page */}
            <div className="h-screen w-screen bg-[#003145] overflow-x-hidden">
                <div className="w-full h-5/6 px-20 flex justify-center items-center text-white">
                    <div className='w-4/6'>
                        <p className='w-11/12 px-16 my-6 font-semibold text-5xl border-l-8 border-[#FFCE5C]'>Accelerate Innovation with Global AI Challenges</p>
                        <p className='w-3/4 px-16 my-6'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                        <button className='mx-16 py-2 px-4 rounded-md font-medium bg-white text-black my-4'>Create Challenge</button>
                    </div>
                    <div className='w-2/6'>
                        <img src={img} classw-fullName='w-3/5' alt="" />
                    </div>
                </div>
                <div className='h-auto px-16 text-white h-1/6 px-16 bg-[#002A3B] flex justify-around items-center'>
                    <DetailCards
                        img={img1}
                        text1='100K'
                        text2='AI model submissions'
                    />
                    <hr className='border border-[#C4C4C4] h-8'/>
                    <DetailCards
                        img={img2}
                        text1='50K'
                        text2='Data Scientists'
                    />
                    <hr className=' border border-[#C4C4C4] h-8'/>
                    <DetailCards
                        img={img3}
                        text1='100K'
                        text2='AI challenges hosted'
                    />
                </div>
            </div>

            {/* Why AI Challenge Page */}
            <div className='w-screen h-screen px-16'>
                <p>Why Participate in <span className='text-[#44924C]'>AI Challenges?</span></p>
            </div>

            
        </>
    )
}

export default ChallengeList