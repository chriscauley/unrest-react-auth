import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'

import css from '@unrest/css'
import Form from '@unrest/react-jsonschema-form'
import { post } from '@unrest/core'
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
    const verb = is_login ? 'Login' : 'Signup'
    const _link = {
      to: config.makeNextUrl(is_login ? 'signup' : 'login', this.getNext()),
      children: is_login ? 'Signup' : 'Login',
    }
    const social_links = config.social.map((social) => {
      social.slug = social.slug || social.name.toLowerCase()
      social.href = `/login/${social.slug}/?next=${this.getNext()}`
      social.className = css.button.base('login-button btn-' + social.slug)
      return social
    })
    return (
      <RouterModal>
        <h2 className={css.h2()}>Please {verb} to continue</h2>
        {social_links.map(({ name, slug, className, href }) => (
          <a href={href} className={className} key={slug}>
            <i className={css.icon(slug)} />
            {verb} using {name}
          </a>
        ))}
        {social_links.length > 0 && <div className="divider">or</div>}
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
