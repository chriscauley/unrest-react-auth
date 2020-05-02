import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import config from './config'
import connect from './connect'

export default (Component, Alternate = Redirect) => {
  return withRouter(
    connect((props) => {
      if (props.auth.user) {
        return <Component {...props} />
      }
      return (
        <Alternate to={config.makeNextUrl('login', props.location.pathname)} />
      )
    }),
  )
}
