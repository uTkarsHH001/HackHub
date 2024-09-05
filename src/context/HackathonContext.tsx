import React, { createContext, useContext, useState, ReactNode } from 'react';
import img1 from '../assets/cardimage/Group 1000002466.png';
import img2 from '../assets/cardimage/Group 1000002766.png';
import img3 from '../assets/cardimage/Group 1000002767.png';
import img4 from '../assets/cardimage/Group 1000002771.png';
import img5 from '../assets/cardimage/Group 1000002772.png';
import img6 from '../assets/cardimage/Group 1000002773.png';

interface Hackathon {
  img: string;
  title: string;
  startDate: Date;
  endDate: Date;
  level: string;
  description: string;
}

interface HackathonContextType {
  hackathons: Hackathon[];
  setHackathons: React.Dispatch<React.SetStateAction<Hackathon[]>>;
  addHackathon: (hackathon: Hackathon) => void;
  deleteHackathon: (title: string) => void;
  editHackathon: (updatedHackathon: Hackathon) => void;
}

const HackathonContext = createContext<HackathonContextType | undefined>(undefined);

export const HackathonProvider = ({ children }: { children: ReactNode }) => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([
    {
      img: img1,
      title: 'Data Science Bootcamp - Graded Datathon',
      startDate: new Date('2024-09-01'),
      endDate: new Date('2024-09-10'),
      level: 'Easy',
      description: 'The Data Science Bootcamp - Graded Datathon is an intensive event where participants tackle real-world data challenges to showcase their analytical and problem-solving skills. It involves hands-on experience with data cleaning, exploration, and modeling, using various tools and techniques. The bootcamp is designed to help individuals enhance their data science proficiency and apply theoretical knowledge to practical scenarios. Participants are graded based on their ability to derive actionable insights and present their findings effectively. This datathon provides valuable exposure to industry practices and fosters a competitive learning environment.'
    },
    {
      img: img2,
      title: 'Data Sprint 72 - Butterfly Identification',
      startDate: new Date('2024-09-15'),
      endDate: new Date('2024-09-20'),
      level: 'Medium',
      description: 'Data Sprint 72 - Butterfly Identification is a specialized competition focused on leveraging data science to identify and classify butterfly species from images. Participants are tasked with developing and applying machine learning models to accurately categorize butterflies, utilizing techniques such as image processing and pattern recognition. The sprint emphasizes practical application of data analysis skills and provides insights into the biodiversity and conservation efforts related to butterflies. Competitors are evaluated on their model accuracy, efficiency, and the ability to handle diverse and challenging datasets. This event fosters innovation in ecological research and machine learning applications.'
    },
    {
      img: img3,
      title: 'AI Innovation Challenge',
      startDate: new Date('2024-08-20'),
      endDate: new Date('2024-08-30'),
      level: 'Hard',
      description: 'The AI Innovation Challenge is a competitive event where participants develop cutting-edge AI solutions to solve complex problems. The challenge focuses on leveraging advanced machine learning techniques and innovative approaches to create impactful solutions. Participants are required to present their models and findings, demonstrating their ability to push the boundaries of AI technology. This event provides a platform for showcasing expertise in AI and offers valuable networking opportunities with industry experts.'
    },
    {
      img: img4,
      title: 'Predictive Analytics Hackathon',
      startDate: new Date('2024-10-01'),
      endDate: new Date('2024-10-10'),
      level: 'Medium',
      description: 'The Predictive Analytics Hackathon invites participants to use predictive modeling techniques to forecast future trends based on historical data. The event encourages the development of innovative models that can provide valuable insights for various industries. Participants will have the chance to work with real datasets and present their predictive solutions to a panel of judges. This hackathon is ideal for those looking to enhance their skills in predictive analytics and gain practical experience in data forecasting.'
    },
    {
      img: img5,
      title: 'Big Data Insights Conference',
      startDate: new Date('2024-11-05'),
      endDate: new Date('2024-11-07'),
      level: 'Easy',
      description: 'The Big Data Insights Conference is a gathering of data professionals and enthusiasts focused on exploring the latest trends and technologies in big data. The conference features keynote speakers, panel discussions, and hands-on workshops covering various aspects of big data analytics. Attendees will gain insights into the latest tools and techniques for managing and analyzing large datasets, as well as opportunities to network with industry leaders and peers.'
    },
    {
      img: img6,
      title: 'Machine Learning Summer School',
      startDate: new Date('2024-07-10'),
      endDate: new Date('2024-07-20'),
      level: 'Medium',
      description: 'The Machine Learning Summer School provides an immersive learning experience focused on fundamental and advanced machine learning concepts. Participants will engage in lectures, practical exercises, and project work to deepen their understanding of machine learning algorithms and their applications. The summer school aims to equip attendees with the skills necessary to tackle real-world challenges using machine learning techniques. This event is ideal for students and professionals looking to enhance their expertise in the field.'
    }
  ]);

  const addHackathon = (hackathon: Hackathon) => {
    setHackathons(prevHackathons => [...prevHackathons, hackathon]);
  };

  const deleteHackathon = (title: string) => {
    setHackathons(prevHackathons => prevHackathons.filter(hackathon => hackathon.title !== title));
  };

  const editHackathon = (updatedHackathon: Hackathon) => {
    setHackathons(prevHackathons =>
      prevHackathons.map(hackathon =>
        hackathon.title === updatedHackathon.title ? updatedHackathon : hackathon
      )
    );
  };

  return (
    <HackathonContext.Provider value={{ hackathons, setHackathons, addHackathon, deleteHackathon, editHackathon }}>
      {children}
    </HackathonContext.Provider>
  );
};

export const useHackathon = () => {
  const context = useContext(HackathonContext);
  if (!context) {
    throw new Error('useHackathon must be used within a HackathonProvider');
  }
  return context;
};

