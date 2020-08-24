import api from './api'
import required from './required'
import AuthNav from './AuthNav'
import Routes from './Routes'

const { use, markStale } = api

export default {
  required,
  AuthNav,
  Routes,
  use,
  markStale,
  connect: () => {throw "auth.connect pattern was removed in version 0.1"},
}
