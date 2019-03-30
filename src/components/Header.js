import React from 'react'
import {
  FormSelect
} from 'shards-react'

import styles from './Header.module.scss'

export default props => {
  return (
    <header className={styles.header}>
      <span className={styles.course}>4º 5ª</span>
      
      <FormSelect
        className={styles.groupSelector}
        size="sm"
        onChange={e => props.changeGroup(e.target.value)}
        value={props.group}
      >
        {
          ['2', '3', '7'].map(group => <option value={group} key={`group-${group}`}>Grupo {group}</option>)
        }
      </FormSelect>
    </header>
  )
}