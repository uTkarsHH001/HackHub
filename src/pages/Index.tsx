
import React, { useState } from 'react';
import LabelledInput from '../components/LabelledInput';
import icon from '../assets/icons/bxs_cloud-upload.svg';
import { useHackathon } from '../context/HackathonContext'
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const { addHackathon } = useHackathon();
  const [formData, setFormData] = useState({
    challengeName: '',
    startDate: '',
    endDate: '',
    description: '',
    level: 'Easy',
    file: null as File | null
  });
  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement; 
    if (type === 'file' && files) {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0] 
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newHackathon = {
      img: formData.file ? URL.createObjectURL(formData.file) : '',
      title: formData.challengeName,
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      level: formData.level,
      description: formData.description
    };

    addHackathon(newHackathon);

    setFormData({
      challengeName: '',
      startDate: '',
      endDate: '',
      description: '',
      level: 'easy',
      file: null
    });

    navigate('/challengelist')
  };

  return (
    <div className="w-full h-full text-sm overflow-hidden">
      <p className="bg-gray-100 py-4 px-12">Challenge Details</p>

      <form onSubmit={handleSubmit} className="px-12 py-2 flex flex-col">
        <LabelledInput
          label="Challenge Name"
          name="challengeName"
          type="text"
          value={formData.challengeName}
          onChange={handleChange}
        />
        <LabelledInput
          label="Start Date"
          name="startDate"
          type="date"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <LabelledInput
          label="End Date"
          name="endDate"
          type="date"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleChange}
        />
        <label htmlFor="description">
          Description
          <textarea
            className="my-2 border block w-2/5"
            rows={6}
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <label htmlFor="file" className="my-2 border w-1/5 font-medium text-gray-500 text-center p-2 flex justify-center items-center">
          Upload &nbsp;
          <img src={icon} alt="Upload icon" />
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="level">
          Level
          <select
            className="my-2 w-1/5 p-1 border-2 rounded-md block text-xs"
            name="level"
            id="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>

        <button
          className="my-2 border p-1 rounded-md w-2/12 bg-[#44924C] text-white"
          type="submit"
        >
          Create Challenge
        </button>
      </form>
    </div>
  );
};

export default Index;
