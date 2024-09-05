import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"

type CheckboxOption = {
  label: string
  value: string
}

interface DropDownFilterProps {
  setFilters: (filters: { status: string[], level: string[] }) => void
}

const statusOptions: CheckboxOption[] = [
  { label: 'All', value: 'All' },
  { label: 'Active', value: 'Active' },
  { label: 'Past', value: 'Past' },
  { label: 'Upcoming', value: 'Upcoming' }
]

const levelOptions: CheckboxOption[] = [
  { label: 'Easy', value: 'Easy' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Hard', value: 'Hard' }
]

const DropdownFilter: React.FC<DropDownFilterProps> = ({ setFilters }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Set<string>>(new Set())
  const [selectedLevel, setSelectedLevel] = useState<Set<string>>(new Set())

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpen(prev => !prev)
  }

  const handleCheckboxChange = (category: 'status' | 'level', value: string) => {
    let newSelectedStatus = selectedStatus
    let newSelectedLevel = selectedLevel

    if (category === 'status') {
      newSelectedStatus = new Set(selectedStatus)
      if (newSelectedStatus.has(value)) {
        newSelectedStatus.delete(value)
      } else {
        newSelectedStatus.add(value)
      }
      setSelectedStatus(newSelectedStatus)
    } else {
      newSelectedLevel = new Set(selectedLevel)
      if (newSelectedLevel.has(value)) {
        newSelectedLevel.delete(value)
      } else {
        newSelectedLevel.add(value)
      }
      setSelectedLevel(newSelectedLevel)
    }
    setFilters({
      status: Array.from(newSelectedStatus),
      level: Array.from(newSelectedLevel)
    })
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
