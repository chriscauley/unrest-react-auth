import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'

import css from '@unrest/css'
import Form, { post } from '@unrest/react-jsonschema-form'

import config from './config'
import withAuth from './withAuth'

export const RouterModal = withRouter((props) => {
  const back = () => props.history.goBack()
  return (
    <div className={css.modal.outer()}>
      <div onClick={back} className={css.modal.mask()} />
      <div className={css.modal.content()}>{props.children}</div>
    </div>
  )
})

class BaseAuthModal extends React.Component {
  state = {
    error: '',
  }
  getOptions = () => config[this.props.slug]
  onSubmit = (formData) => {
    return post(this.getOptions().post_url, formData).catch((error) =>
      this.setState({ error }),
    )
  }
  onSuccess = () => {
    this.props.auth.refetch()
    this.props.history.replace(this.getNext() || config.login_redirect)
  }
  getNext = () => decodeURIComponent(this.props.match.params.next || '')

  render() {
    if (this.props.auth.user) {
      return <Redirect to={this.getNext()} />
    }
    const is_login = this.props.slug === 'login'
    const _link = {
      to: config.makeUrl(is_login ? 'signup' : 'login', this.getNext()),
      children: is_login ? 'Signup' : 'Login',
    }
    const { schema } = this.getOptions()
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

const Modal = withRouter(withAuth(BaseAuthModal))

export default Modal

export const LoginModal = () => <Modal slug="login" />

export const SignupModal = () => <Modal slug="signup" />
