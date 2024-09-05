import React from 'react';

interface LabelledInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const LabelledInput: React.FC<LabelledInputProps> = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <label className="flex flex-col my-2">
      {label}
      <input
        className="w-1/4 border border-slate-300 rounded-md block outline-none p-2"
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default LabelledInput;
