import React, { useState, useEffect } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, isPast, isFuture, format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

interface HackathonDetailCardProp {
  img: string
  title: string
  startDate: Date
  endDate: Date
  key: number
  description: string
  level: string
}

const HackathonDetailCard: React.FC<HackathonDetailCardProp> = ({ key, img, title, startDate, level, endDate, description }) => {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  const [status, setStatus] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()

      if (isPast(endDate)) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
        })
        setStatus('Ended')
        return
      }

      if (isFuture(startDate)) {
        const days = differenceInDays(startDate, now)
        const hours = differenceInHours(startDate, now) % 24
        const minutes = differenceInMinutes(startDate, now) % 60
        setTimeLeft({ days, hours, minutes })
        setStatus('Upcoming')
        return
      }

      if (isPast(startDate) && isFuture(endDate)) {
        const days = differenceInDays(endDate, now)
        const hours = differenceInHours(endDate, now) % 24
        const minutes = differenceInMinutes(endDate, now) % 60
        setTimeLeft({ days, hours, minutes })
        setStatus('Active')
        return
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [startDate, endDate])

  const handleParticipateClick = () => {
    navigate('/challengedetails', {
      state: {
        key,
        title,
        startDate,
        level,
        description
      }
    })
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={img} alt={title} />
      <div className="px-6 py-4 flex flex-col items-center">
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            {status}
          </span>
        </div>
        <div className="font-bold w-3/4 text-center text-md mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          {status === 'Upcoming' ? (
            <div className="text-center text-sm">
              Starts in <br />
              <div className="font-bold text-md flex gap-2">
                <div>
                  <p>{timeLeft.days}</p>
                  <p>Days</p>
                </div> :
                <div>
                  <p>{timeLeft.hours}</p>
                  <p>Hours</p>
                </div> :
                <div>
                  <p>{timeLeft.minutes}</p>
                  <p>Minutes</p>
                </div>
              </div>
            </div>
          ) : status === 'Active' ? (
            <div className="text-center text-sm">
              Ends in <br />
              <div className="font-bold text-md flex gap-2">
                <div>
                  <p>{timeLeft.days}</p>
                  <p>Days</p>
                </div> :
                <div>
                  <p>{timeLeft.hours}</p>
                  <p>Hours</p>
                </div> :
                <div>
                  <p>{timeLeft.minutes}</p>
                  <p>Minutes</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-sm">
              Ended at <br />
              <span className="font-bold text-md">{format(endDate, 'PPP p')}</span>
            </p>
          )}
        </div>
      </div>
      <div className="py-4 flex justify-center">
        <button onClick={handleParticipateClick} className="bg-[#44924C] hover:bg-green-700 rounded-lg text-white font-bold py-2 px-4">
          Participate Now
        </button>
      </div>
    </div>
  )
}

export default HackathonDetailCard
