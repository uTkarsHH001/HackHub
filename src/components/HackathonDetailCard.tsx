import React, { useState, useEffect } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

interface HackathonDetailCardProp {
  img: string;
  status: string;
  title: string;
  endDate: Date;
}

const HackathonDetailCard: React.FC<HackathonDetailCardProp> = ({ img, status, title, endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {   
      const now = new Date();
      const days = differenceInDays(endDate, now);
      const hours = differenceInHours(endDate, now) % 24;
      const minutes = differenceInMinutes(endDate, now) % 60;
      const seconds = differenceInSeconds(endDate, now) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full h-48 object-cover" src={img} alt={title} />
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
          {status}
        </span>
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          <p>
            Starts in{' '}
            <span className="font-bold">
              {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Mins : {timeLeft.seconds} Secs
            </span>
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Participate Now
        </button>
      </div>
    </div>
  );
};

export default HackathonDetailCard
