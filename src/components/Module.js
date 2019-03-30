import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'shards-react'
import { timeToIntToPx, dayToPx } from '../utils'
import styles from './Module.module.scss'

export default props => (
  <Card
    className={styles.module}
    style={{
      backgroundColor: props.color,
      top: timeToIntToPx(props.start_time),
      left: dayToPx(props.day),
      height: timeToIntToPx(props.end_time) - timeToIntToPx(props.start_time),
    }}
    onClick={() => props.toggleModuleInfo({ ...props })}
  >
    <FontAwesomeIcon className={styles.moduleIcon} icon={props.icon} />
  </Card>
)
