import { useState } from 'react'
import img from '../assets/icons/PicsArt_04-14-04.42 1.svg'
import img1 from '../assets/icons/Group 1000002515.svg'
import img2 from '../assets/icons/Group 1000002516.svg'
import img3 from '../assets/icons/Group 1000002518.svg'
import img4 from '../assets/icons/carbon_notebook-reference.svg'
import img5 from '../assets/icons/Vector.svg'
import img6 from '../assets/icons/Robot.svg'
import img7 from '../assets/icons/IdentificationCard.svg'
import DetailCards from '../components/DetailCards'
import ChallengeCard from '../components/ChallengeInfoCard'
import DropdownFilter from '../components/DropDownFilter'
import HackathonDetailCard from '../components/HackathonDetailCard'
import { useHackathon } from '../context/HackathonContext'
import { getStatus } from '../utils/getStatus'

const ChallengeList: React.FC = () => {

    const [filters, setFilters] = useState<{ status?: string[]; level?: string[] }>({})
    const { hackathons } = useHackathon()

    const filteredHackathons = hackathons.filter((hackathon) => {
        
        const status = getStatus(hackathon.startDate, hackathon.endDate)

        if (filters.status && filters.status.includes('All')) {
          if (filters.level && filters.level.length > 0) {
            return filters.level.includes(hackathon.level);
          }
          return true; 
        }
      
        if (filters.status && filters.status.length > 0) {
          if (filters.status.includes(status)) {
                if (filters.level && filters.level.length > 0) {
                    return filters.level.includes(hackathon.level);
                }
                return true;
          }
          return false
        }
      
        if (filters.level && filters.level.length > 0) {
          if (!filters.level.includes(hackathon.level)) {
            return false;
          }
        }      
        return true;
      })

    return (
        <>
            {/* Intro Page */}
            <div className="h-screen w-screen bg-[#003145] overflow-x-hidden">
                <div className="w-full h-5/6 px-20 flex justify-center items-center text-white">
                    <div className='w-4/6'>
                        <p className='w-11/12 px-16 my-6 font-semibold text-5xl border-l-8 border-[#FFCE5C]'>
                            Accelerate Innovation with Global AI Challenges
                        </p>
                        <p className='w-3/4 px-16 my-6'>
                            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                        </p>
                        <button className='mx-16 py-2 px-4 rounded-md font-medium bg-white text-black my-4'>
                            Create Challenge
                        </button>
                    </div>
                    <div className='w-2/6'>
                        <img src={img} className='w-3/5' alt="" />
                    </div>
                </div>
                <div className='w-full h-1/6 px-16 text-white h-1/6 px-16 bg-[#002A3B] flex justify-around items-center'>
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
            <div className='w-screen h-screen py-16 px-24'>
                <p className='font-semibold text-2xl text-center'>
                    Why Participate in <span className='text-[#44924C]'>AI Challenges?</span>
                </p>

                <div className='my-8 grid grid-cols-2 space-x-4 space-y-4'>
                    <ChallengeCard
                        img={img4}
                        text1='Prove your skills'
                        text2='Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.'
                    />
                    <ChallengeCard
                        img={img5}
                        text1='Learn from community'
                        text2='One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.'
                    />
                    <ChallengeCard
                        img={img6}
                        text1='Challenge yourself'
                        text2='There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.'
                    />
                    <ChallengeCard
                        img={img7}
                        text1='Earn recognition'
                        text2='You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.'
                    />
                </div>
            </div>

            {/* Explore Challenges */}
            <div className='w-screen h-fit bg-[#002A3B] px-24 py-16'>
                <p className='text-xl font-semibold text-white text-center pb-8 my-2'>
                    Explore Challenges
                </p>
                <form className='w-full flex justify-center space-x-2'>
                    <div className='w-2/4'>
                        <input className='w-full p-2 rounded-lg' type="text" placeholder='Search' />
                    </div>
                    <div className='w-1/6'>
                        <DropdownFilter setFilters={setFilters} />
                    </div>
                </form>    
            </div>    

            {/* Display Filtered Hackathons */}
            <div className='bg-[#003145] w-screen min-h-72 p-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-16'>
                {filteredHackathons.map((hackathon, index) => (
                    <HackathonDetailCard
                        key={index}
                        img={hackathon.img}
                        title={hackathon.title}
                        startDate={hackathon.startDate}
                        endDate={hackathon.endDate}
                        description={hackathon.description}
                        level={hackathon.level}

                    />
                ))}
            </div>
        </>
    )
}

export default ChallengeList