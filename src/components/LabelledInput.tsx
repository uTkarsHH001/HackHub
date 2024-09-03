import React from 'react'

interface LabelledInputProps {
    label: string
    name: string
    type: string
    placeholder?: string
}

const LabelledInput: React.FC<LabelledInputProps> = ({ label, name, type, placeholder }) => {
    return (
        <>
            <label>
                {label}
                <input className="w-1/4 border border-slate-300 rounded-md block my-3 outline-none" placeholder={placeholder} name={name} type={type} />
            </label>
        </>
    );
};

export default LabelledInput
