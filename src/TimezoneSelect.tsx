// TimezoneSelect.tsx
import React from 'react';

interface TimezoneSelectProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  timezones: string[];
}

const TimezoneSelect: React.FC<TimezoneSelectProps> = ({ label, value, onChange, timezones }) => (
  <div className="timezone-col">
    <label htmlFor={label.toLowerCase()} className="timezone-label">
      {label}
    </label>
    <select id={label.toLowerCase()} value={value} onChange={onChange} className="timezone-select">
      {timezones.map((timezone) => (
        <option key={timezone} value={timezone}>
          {timezone}
        </option>
      ))}
    </select>
  </div>
);

export default TimezoneSelect;