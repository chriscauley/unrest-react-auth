import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import qs from 'querystring'
import { alert, SchemaForm } from '@unrest/core'
import css from '@unrest/css'

import api from './api'

const links = {
  login: (
    <Link to={'/login/'} className={css.link('mr-2')}>
      Login
    </Link>
  ),
  signup: (
    <Link to={'/signup/'} className={css.link('mr-2')}>
      Sign Up
    </Link>
  ),
  reset: (
    <Link to={'/password-reset/'} className={css.link('mr-2')}>
      Reset Password
    </Link>
  ),
}

function Wrapper({ title, children }) {
  return (
    <div className="max-w-lg mx-auto my-4">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

function Login() {
  const success = useNext('You have been logged in.')
  return (
    <Wrapper title="Please Login to Continue">
      <SchemaForm form_name="LoginForm" onSuccess={success} />
      <div className="text-center">
        {links.signup}
        {links.reset}
      </div>
    </Wrapper>
  )
}

function SignUp() {
  const success = useNext(
    'Your account has been created and you have been logged in.',
  )
  return (
    <Wrapper title="Create an Account">
      <SchemaForm form_name="SignUpForm" onSuccess={success} />
      <div className="text-center">
        {links.login}
        {links.reset}
      </div>
    </Wrapper>
  )
}

function PasswordReset() {
  const [_, { success }] = alert.useAlert()
  const onSuccess = () => success('Check your email for further instructions.')
  return (
    <Wrapper title="Password Reset">
      <SchemaForm form_name="PasswordResetForm" onSuccess={onSuccess} />
      <div className="text-center">
        {links.login}
        {links.signup}
      </div>
    </Wrapper>
  )
}

function CompletePasswordReset() {
  const success = useNext(
    'Your password has been set and you have been logged in.',
  )
  return (
    <Wrapper title="Complete Password Reset">
      <SchemaForm form_name="SetPasswordForm" onSuccess={success} />
    </Wrapper>
  )
}

const useNext = (message) => {
  const next = qs.parse(useLocation().search.replace(/^\?/, '')).next || '/'
  const [_, { success }] = alert.useAlert()
  const { refetch } = api.use()
  const history = useHistory()
  return () => {
    success(message)
    refetch()
    history.replace(next)
  }
}

export default {
  Login,
  SignUp,
  PasswordReset,
  CompletePasswordReset,
}
