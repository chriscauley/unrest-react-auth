import React from 'react'
import { Link } from 'react-router-dom'
import css from '@unrest/css'

import config from './config'
import withAuth from './withAuth'

class UserDropdown extends React.Component {
  state = {}
  toggle = () => this.setState({ open: !this.state.open })
  logout = () => fetch(config.logout.post_url).then(() => this.props.refetch())

  render() {
    const { user } = this.props
    return (
      <div className={css.dropdown.outer()}>
        <div className={css.dropdown.toggle()} onClick={this.toggle}>
          {user.username}
        </div>
        <div className={css.dropdown.shelf(this.state.open ? 'block' : 'hidden')}>
          <div className={css.dropdown.item()} onClick={this.logout}>
            Logout
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth((props) => {
  const { user, refetch } = props.auth
  const next = (slug) => config.makeUrl(slug, window.location.pathname)
  return user ? (
    <UserDropdown user={user} refetch={refetch} />
  ) : (
    <>
      <Link to={next('login')} className={css.button.light()}>
        Login
      </Link>
      <Link to={next('signup')} className={css.button.light()}>
        Sign Up
      </Link>
    </>
  )
})
