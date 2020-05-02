import React from 'react'
import RestHook from '@unrest/react-rest-hook'
import { withRouter } from 'react-router-dom'
import css from '@unrest/css'
import Form, { post } from '@unrest/react-jsonschema-form'

import { RouterModal } from './Modal'
const url = '/api/schema/PasswordResetForm/'
const withSchema = RestHook(url)

class ResetPassword extends React.Component {
  state = {}
  onSubmit = (formData) => post(url, formData)
  onSuccess = () => this.setState({ success: true })
  render() {
    const { loading, schema } = this.props.api
    if (loading) {
      return null
    }
    return (
      <RouterModal>
        <Form
          schema={schema}
          onSubmit={this.onSubmit}
          onSuccess={this.onSuccess}
        />
        {this.state.success && (
          <div className={css.alert.success()}>
            Success! Please check your email. If an address exists with this
            account then a password reset was sent.
          </div>
        )}
      </RouterModal>
    )
  }
}

export default withRouter(withSchema(ResetPassword))
