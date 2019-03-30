import ENDPOINT from './API/endpoint'

const fullScheduleWidth = 400

export const getModuleWidth = () => (window.innerWidth >= fullScheduleWidth ? 60 : 60 * window.innerWidth / fullScheduleWidth)
export const getGapWidth = () => (window.innerWidth >= fullScheduleWidth ? 10 : 10 * window.innerWidth / fullScheduleWidth)

export const responsive = n => (window.innerWidth >= fullScheduleWidth ? n : n * window.innerWidth / fullScheduleWidth)


export const timeToInt = str_time => {
  let [ hours, minutes ] = str_time.split(':')
  let time = parseInt(hours) + parseInt(minutes) / getModuleWidth()
  
  return time
}

export const timeToPx = time => (time - 7.5) * getModuleWidth()

export const timeToIntToPx = str_time => timeToPx(timeToInt(str_time))

export const dayToPx = day => {
  let column = 0

  switch (day) {
    case 'MON':
      column = 0
      break
    case 'TUE':
      column = 1
      break
    case 'WED':
      column = 2
      break
    case 'THU':
      column = 3
      break
    case 'FRI':
      column = 4
      break
    default:
  }
  return column * (getModuleWidth() + getGapWidth())
}

export const API = {
  getModules: group => ENDPOINT(group)
}