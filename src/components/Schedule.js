import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { getModuleWidth, getGapWidth, responsive, timeToPx } from '../utils'

import Module from './Module'

import styles from './Schedule.module.scss';



export default props => {
  const { modules } = props
  const scheduleRange = _.range(8, 22 + 1)
  let [ now, setNow ] = useState(new Date())
  
  useEffect(() => {
    setNewNow(setNow)
    let dateUpdater = setInterval(() => setNewNow(setNow), 1000)
    return () => { clearInterval(dateUpdater) }
  })
  
  
  
  if (
    now.formatted >= 7.5 && now.formatted <= 21.75
    &&
    now.getDay() >= 1 && now.getDay() <= 5
    ) now.inRange = true
  else now.inRange = false

  return (
    <div className={styles.schedule}>
      {
        scheduleRange.map(time => (
          <div className={styles.scheduleTime} key={`hr-${time}`}>
            <span className={styles.scheduleTimeNumber} style={{ top: timeToPx(time) - 22.5 }}>{time}</span>
            <hr className={styles.scheduleTimeLine} style={{ top: timeToPx(time) }} />
          </div>
        ))
      }
      {
        now.inRange
        &&
        <div className={styles.scheduleNow}>
          <hr className={`${styles.scheduleNowLine} with-shadows`} style={{ top: timeToPx(now.formatted), left: nowLineDayInPx(now.getDay() - 1) }} />
        </div>
      }
      {
        modules.map(module => <Module {...module} key={module.day + '-' + module.start_time} toggleModuleInfo={props.toggleModuleInfo} />)
      }
    </div>
  )
}





function setNewNow(setNow) {
  let newNow = new Date()
  newNow.formatted = newNow.getHours() + newNow.getMinutes() / 60

  setNow(newNow)
}

function nowLineDayInPx(day) {
  return responsive(25) + day  * (getModuleWidth() + getGapWidth())
}