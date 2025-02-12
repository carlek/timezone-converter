// App.tsx
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './styles.css';
import TimeInput from './TimeInput';
import TimezoneSelect from './TimezoneSelect';


const App: React.FC = () => {
  const [localTime, setLocalTime] = useState('');
  const [localTimezone, setLocalTimezone] = useState('America/New_York');
  const [targetTimezone, setTargetTimezone] = useState('Europe/London');
  const [convertedTime, setConvertedTime] = useState('');
  const [timezones, setTimezones] = useState<string[]>([]);

  useEffect(() => {
    setTimezones(moment.tz.names());
  }, []);

  useEffect(() => {
    const currentDate = moment().format('YYYY-MM-DD');
    const fullDateTime = `${currentDate} ${localTime}`;
    const time = moment.tz(fullDateTime, localTimezone);
    const converted = time.tz(targetTimezone).format('hh:mm:ss A');
    setConvertedTime(converted);
  }, [localTime, localTimezone, targetTimezone]); 

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalTime(event.target.value);
  };

  const handleLocalTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalTimezone(event.target.value);
  };

  const handleTargetTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetTimezone(event.target.value);
  };

  return (  
    <div>
      <h1 className="title">Timezone Converter</h1>
      <div className="container">
        <div className="time-row">
          <TimeInput label="Local Time" value={localTime} onChange={handleTimeChange} />
          {convertedTime && (
            <div className="time-col">
              <label className="time-label">Converted Time</label>
              <span className="time-input">{convertedTime}</span>
            </div>
          )}
        </div>

        <div style={{ margin: '20px 0' }} />

        <div className="timezone-row">
          <TimezoneSelect label="Local Timezone" value={localTimezone} onChange={handleLocalTimezoneChange} timezones={timezones} />
          <TimezoneSelect label="Target Timezone" value={targetTimezone} onChange={handleTargetTimezoneChange} timezones={timezones} />
        </div>
      </div>
    </div>
  );
};

export default App;