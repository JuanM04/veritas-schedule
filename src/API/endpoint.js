const DB = require('./db.json')

function modularize(subjects) {
  let arr = []

  for (const subject of subjects) {
    let subjectInfo = {
      name: subject.name,
      icon: subject.icon,
      color: subject.color,
    }

    for (const module of subject.modules) {
      let time = module.is_ssm ?
          ssmToTime(module.ssm_number) :
          {
            start_time: module.start_time,
            end_time: module.end_time,
          }
      
      
      
      arr.push({
        ...subjectInfo,
        day: module.day,
        ...time,
      })
    }
  }

  return arr
}

function ssmToTime(ssmNumber) {
  switch (ssmNumber) {
    case 11:
      return { start_time: '7:30', end_time: '8:30' }
    case 12:
      return { start_time: '8:40', end_time: '9:40' }
    case 13:
      return { start_time: '9:50', end_time: '10:50' }
    case 14:
      return { start_time: '11:00', end_time: '12:00' }
    case 15:
      return { start_time: '12:00', end_time: '13:00' }
    
    case 21:
      return { start_time: '13:15', end_time: '14:15' }
    case 22:
      return { start_time: '14:25', end_time: '15:25' }
    case 23:
      return { start_time: '15:35', end_time: '16:35' }
    case 24:
      return { start_time: '16:45', end_time: '17:45' }
    case 25:
      return { start_time: '17:45', end_time: '18:45' }
    
    case 31:
      return { start_time: '17:45', end_time: '19:45' }
    case 32:
      return { start_time: '20:00', end_time: '21:45' }
    
    default:
      return { start_time: '', end_time: '' }
  }
}





export default group => modularize([
  ...DB.global.subjects,
  ...DB.groups[group].subjects,
])