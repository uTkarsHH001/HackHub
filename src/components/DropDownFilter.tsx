// DropdownFilter.tsx
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"

type CheckboxOption = {
  label: string
  value: string
}

const statusOptions: CheckboxOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Past', value: 'past' },
  { label: 'Upcoming', value: 'upcoming' }
]

const levelOptions: CheckboxOption[] = [
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' }
]

const DropdownFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Set<string>>(new Set())
  const [selectedLevel, setSelectedLevel] = useState<Set<string>>(new Set())

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpen(prev => !prev)
  }

  const handleCheckboxChange = (category: 'status' | 'level', value: string) => {
    if (category === 'status') {
      setSelectedStatus(prev => {
        const newSelection = new Set(prev)
        if (newSelection.has(value)) {
          newSelection.delete(value)
        } else {
          newSelection.add(value)
        }
        return newSelection
      })
    } else {
      setSelectedLevel(prev => {
        const newSelection = new Set(prev)
        if (newSelection.has(value)) {
          newSelection.delete(value)
        } else {
          newSelection.add(value)
        }
        return newSelection
      })
    }
  }

  return (
    <div className="w-full relative">
      <button
        onClick={toggleDropdown}
        className={`${isOpen ? `w-full` : `w-2/4`} bg-white text-black flex items-center justify-between p-2 rounded-lg`}
        type="button"
      >
        <div>Filter</div>
        <div className={`${isOpen && `rotate-180`}`} ><IoIosArrowDown /></div>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="p-2">
            <h3 className="text-lg font-semibold mb-2">Status</h3>
            {statusOptions.map(option => (
              <label key={option.value} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={selectedStatus.has(option.value)}
                  onChange={() => handleCheckboxChange('status', option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
          <div className="p-2 border-t">
            <h3 className="text-lg font-semibold mb-2">Level</h3>
            {levelOptions.map(option => (
              <label key={option.value} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={selectedLevel.has(option.value)}
                  onChange={() => handleCheckboxChange('level', option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownFilter
