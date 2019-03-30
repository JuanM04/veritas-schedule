import React, { Component } from 'react';
import Header from './components/Header';
import Schedule from './components/Schedule';
import ModuleInfo from './components/ModuleInfo';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import { app } from './App.module.scss';

import { API } from './utils'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBookOpen,
  faSquareRootAlt,
  faLanguage,
  faHeartbeat,
  faWeightHanging,
  faAppleAlt,
  faVial,
  faGlobeAmericas,
  faLandmark,

  faPlug,
  faDraftingCompass,
  faBolt,
  faCogs,

  faRunning,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBookOpen,
  faSquareRootAlt,
  faLanguage,
  faHeartbeat,
  faWeightHanging,
  faAppleAlt,
  faVial,
  faGlobeAmericas,
  faLandmark,

  faPlug,
  faDraftingCompass,
  faBolt,
  faCogs,

  faRunning,
)



class App extends Component {
  state = {
    group: localStorage.getItem('group') || '2',
    moduleInfoOpen: false,
    moduleInfo: {}
  }

  onGroupChange = (group) => {
    this.setState({ group })
    localStorage.setItem('group', group)
  }

  toggleModuleInfo = (info = false) => {
    this.setState({
      moduleInfoOpen: info ? true : false,
      moduleInfo: info || {}
    })
  }

  render() {
    return (
      <div className={app}>
        <Header group={this.state.group} changeGroup={this.onGroupChange} />
        <Schedule modules={API.getModules(this.state.group)} toggleModuleInfo={this.toggleModuleInfo} />
        <ModuleInfo {...this.state.moduleInfo} moduleInfoOpen={this.state.moduleInfoOpen} toggleModuleInfo={this.toggleModuleInfo} />
      </div>
    )
  }
}

export default App;