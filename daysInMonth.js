'use strict';

function daysInMonth(month, leapYear) {
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return `${month} has 31 days.`;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return `${month} has 30 days.`;
      break;
    case 'February':
      return `${month} has ${leapYear ? '28' : '29'} days.`;
      break;
    default:
      throw new Error('Must enter a valid month.');
  }
}
