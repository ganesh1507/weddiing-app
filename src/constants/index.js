

export const GOOGLE_CALENDAR_LINK = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=20260207T073000Z/20260207T093000Z&text=Pranit+%26+Janhvi+Wedding&details=Pranit+%26+Janhvi+Wedding`;
export const GOOGLE_MAPS_LINK = `https://maps.app.goo.gl/qVzEMijouPShV5mA7?g_st=ipc`;


// Marriage Date and Time in IST
const marriageDateTimeIST = new Date('2026-02-07T12:30:00+05:30');

// Unix epoch start time
const epochStart = new Date('1970-01-01T00:00:00+05:30');

// Calculate the difference in milliseconds
const epochDiff = marriageDateTimeIST - epochStart;

// Convert the difference to seconds (epoch time)
const epochTime = Math.floor(epochDiff / 1000);

export const EPOCH_START_EVENT = epochTime;
export const EPOCH_END_EVENT = 1770469200;


