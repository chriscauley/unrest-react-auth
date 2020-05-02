import React from 'react'
import RestHook from '@unrest/react-rest-hook'
import { withRouter, Link } from 'react-router-dom'
import Form, { post } from '@unrest/react-jsonschema-form'
import css from '@unrest/css'

import connect from './connect'
import { RouterModal } from './Modal'

const url = '/api/schema/PasswordResetConfirmForm/'
const withSchema = RestHook(url)

class ResetPasswordConfirm extends React.Component {
  onSubmit = (formData) => post(url, formData)
  onSuccess = () => this.props.auth.refetch()
  render() {
    const { loading, schema } = this.props.api
    if (loading) {
      return null
    }
    delete schema.properties.new_password1.description
    return (
      <RouterModal>
        {this.props.auth.user ? (
          <div>
            <div className={css.h3()}>Password reset successful</div>
            <p>
              Your password reset was successful and you have been logged in.
              <Link to="/" className={css.link('px-2')}>
                Click here to continue.
              </Link>
            </p>
          </div>
        ) : (
          <Form
            initial={this.props.match.params}
            schema={schema}
            onSubmit={this.onSubmit}
            onSuccess={this.onSuccess}
          />
        )}
      </RouterModal>
    )
  }
}

export default connect(withRouter(withSchema(ResetPasswordConfirm)))
