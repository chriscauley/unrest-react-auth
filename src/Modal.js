import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'

import css from '@unrest/css'
import Form, { post } from '@unrest/react-jsonschema-form'
import RestHook from '@unrest/react-rest-hook'

import config from './config'
import connect from './connect'

export const RouterModal = withRouter((props) => {
  const back = () => props.history.goBack()
  return (
    <div className={css.modal.outer()}>
      <div onClick={back} className={css.modal.mask()} />
      <div className={css.modal.content()}>{props.children}</div>
    </div>
  )
})

const withLoginSchema = RestHook('/api/schema/LoginForm/')
const withSignupSchema = RestHook('/api/schema/SignupForm/')

class BaseAuthModal extends React.Component {
  state = {
    error: '',
  }
  onSubmit = (formData) => {
    const url = this.props.api.makeUrl()
    return post(url, formData).catch((error) => this.setState({ error }))
  }
  onSuccess = () => {
    this.props.auth.refetch()
    this.props.history.replace(this.getNext() || config.login_redirect)
  }
  getNext = () => decodeURIComponent(this.props.match.params.next || '')

  render() {
    const { loading, makeUrl, schema } = this.props.api
    if (loading) {
      return null
    }
    if (this.props.auth.user) {
      return <Redirect to={this.getNext()} />
    }
    const url = makeUrl()
    const is_login = url.includes('Login')
    const _link = {
      to: config.makeNextUrl(is_login ? 'signup' : 'login', this.getNext()),
      children: is_login ? 'Signup' : 'Login',
    }
    return (
      <RouterModal>
        <Form
          schema={schema}
          onSubmit={this.onSubmit}
          onSuccess={this.onSuccess}
        />
        <Link replace={true} {..._link} className={css.link('mr-2')} />
        <Link replace={true} to="/reset-password/" className={css.link()}>
          Forgot Password?
        </Link>
      </RouterModal>
    )
  }
}

const Modal = withRouter(connect(BaseAuthModal))
export const LoginModal = withLoginSchema(Modal)
export const SignupModal = withSignupSchema(Modal)
