import moment from 'moment'
const momentTime = require('moment-timezone');

export const formatDate = (date, format = "dddd, MMMM Do YYYY") => {
  return moment(date).format(format);
}

export const addDaysToDate = (date, addDays) => {
  return moment(date).add({ day: addDays });
}
export const addYearToDate = (date, yearsCount) => {
  return moment(date).add({ year: yearsCount })
}
export const isToday = (date) => {
  return moment(date).isSame(moment(), 'day');
}

export const getDifferenceOfYearsInDates = (start, end) => {
  let first = start.getFullYear();
  let second = end.getFullYear();
  let arr = Array();
  for (i = first; i <= second; i++) arr.push(i);
  return arr;
}

export const DATE_FORMATS = {
  DETAILED_DATE: "dddd, MMMM Do YYYY",
  TIME: 'hh:mm a',
  SUBSCRIPTION_FORMAT: "hh:mm a dddd, MMMM Do YYYY",
  DATE: 'YYYY-MM-DD',
  JOURNAL_FORMAT: 'YYYY-MM-DD',
}

export const getComparasionOfDayNight = (currentTime, startTime, endTime, TimeFormat = "hh:mm:ss") => {
  return (moment(currentTime, TimeFormat).isBetween(moment(startTime, TimeFormat), moment(endTime, TimeFormat)))
}

export const getDateFromTime = (timeString) => {
  return new Date(moment(timeString, DATE_FORMATS.TIME))
}

export const getCurrentTimeZone = () => {
  return momentTime.tz.guess()
}

export const convertISOTimeToLocalTime = (inputTime, resultTimeZone = getCurrentTimeZone()) => {
  const convertedUTCTime = moment(inputTime).utc();
  return momentTime(convertedUTCTime).tz(resultTimeZone).format(DATE_FORMATS.SUBSCRIPTION_FORMAT)

}