import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import api from './api'

const Http403 = ({ message }) => {
  return (
    <div>
      <h1>Error 403: Not Allowed</h1>
      {message || 'You are not allowed to do this'}
    </div>
  )
}

export default (Component, options = {}) => {
  return function AuthRequired(props) {
    const location = useLocation()
    const auth = api.use()
    if (auth.user) {
      if (options.roles && !options.roles.includes(auth.user.role)) {
        return (
          <Http403
            message={`Only "${options.roles.join(
              ' or ',
            )}" users can access this page.`}
          />
        )
      }
      return <Component {...props} />
    }
    if (auth.loading) {
      return null
    }
    return <Redirect to={`/login/?next=${location.pathname}`} />
  }
}
