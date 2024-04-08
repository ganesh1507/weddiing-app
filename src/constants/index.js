

export const GOOGLE_CALENDAR_LINK = `https://calendar.google.com/calendar/event?action=TEMPLATE&dates=20201003T040000Z%2F20201003T060000Z&text=Dinda+%26+Indra+Wedding&details=Dinda+%26+Indra+Wedding`;
export const GOOGLE_MAPS_LINK = `https://maps.app.goo.gl/7LVG3QA13g1wvdCP8`;


// Marriage Date and Time in IST
const marriageDateTimeIST = new Date('2024-04-28T12:30:00+05:30');

// Unix epoch start time
const epochStart = new Date('1970-01-01T00:00:00+05:30');

// Calculate the difference in milliseconds
const epochDiff = marriageDateTimeIST - epochStart;

// Convert the difference to seconds (epoch time)
const epochTime = Math.floor(epochDiff / 1000);

export const EPOCH_START_EVENT = epochTime;
export const EPOCH_END_EVENT = 1714305616;


