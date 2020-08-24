import React from 'react'
import { Route } from 'react-router-dom'
import screens from './screens'


export default function AuthRoutes() {
  return (
    <>
      <Route path="/login/" component={screens.Login} />
      <Route path="/signup/" component={screens.SignUp} />
      <Route path="/password-reset/" component={screens.PasswordReset} />
      <Route path="/reset/" component={screens.CompletePasswordReset} />
    </>
  )
}
