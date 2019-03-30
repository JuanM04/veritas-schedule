import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, ModalBody } from 'shards-react'

import styles from './ModuleInfo.module.scss'

export default props => (
  <Modal
    size="sm"
    open={props.moduleInfoOpen}
    toggle={props.toggleModuleInfo}
    centered
    modalContentClassName={styles.wrapper}
  >
    <ModalBody
      className={styles.moduleInfo}
      style={{ backgroundColor: props.color }}
    >
      <FontAwesomeIcon className={styles.moduleInfoIcon} icon={props.icon} />
      
      <p className={styles.moduleInfoName}>{props.name}</p>

      <p className={styles.moduleInfoTime}>{props.start_time} - {props.end_time}</p>
    </ModalBody>
  </Modal>
)