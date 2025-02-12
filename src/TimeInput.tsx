// TimeInput.tsx
import React from 'react';

interface TimeInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ label, value, onChange }) => (
  <div className="time-col">
    <label htmlFor={label.toLowerCase()} className="time-label">
      {label}
    </label>
    <input type="time" id={label.toLowerCase()} value={value} onChange={onChange} className="time-input" />
  </div>
);

export default TimeInput;