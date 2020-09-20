import api from './api'
import config from './config'
import required from './required'
import AuthNav from './AuthNav'
import Routes from './Routes'

export default {
  ...api,
  config,
  required,
  AuthNav,
  Routes,
  connect: () => {
    throw 'auth.connect pattern was removed in version 0.1'
  },
}
