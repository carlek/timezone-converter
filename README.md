# Timezone Converter

This is a simple React app that allows you to convert a local time from one timezone to another.

## User Guide

*   **Enter local time:** Use the time input to enter your local time.
*   **Select timezones:** Choose your local timezone and the target timezone from the dropdowns.
*   **Automatic conversion:** The converted time is displayed automatically as you make changes.

## To run the app:

1.  Install dependencies: `npm install`
2.  Start the development server: `npm start`
3.  See "Dockerized" section below to use Docker.

## Developer Notes

*   **Reactive conversion:** The app uses `useEffect` to reactively update the converted time whenever the input time or selected timezones change. This eliminates the need for typical "Convert" buttons, allowing the user to quickly scroll and select local or target timezones. 
*   **Timezone library:** The `moment-timezone` library is used for handling timezone conversions.
*   **Dynamic timezones:** Timezone dropdowns are dynamically populated using `moment.tz.names()`.
*   **File organization:** 
    *   `App.tsx`: Main application component, utilizes `TimeInput` and `TimezoneSelect`.
    *   `TimeInput.tsx`: Component for the time input fields.
    *   `TimezoneSelect.tsx`: Component for the timezone dropdown selections.
    *   `styles.css`: Contains the CSS styles for the application.
*   **Dockerized:** The app can be run in a Docker container. See the Dockerfile for instructions.
    1. Build Image: `docker build -t timezone-converter .`
    2. Run Image: `docker run -p 3000:3000 timezone-converter`