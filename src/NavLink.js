import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from '@unrest/react-core'
import css from '@unrest/css'

import config from './config'
import connect from './connect'

const slugify = (s) => (s.includes('@') ? s.split('@')[0] + '@...' : s)

class UserDropdown extends React.Component {
  state = {}
  logout = () => fetch(config.logout.post_url).then(() => this.props.refetch())

  render() {
    const { user, links = [] } = this.props
    const funct = (value) => (typeof value === 'function' ? value(user) : value)
    const _links = [
      ...links.map(funct),
      { onClick: this.logout, children: 'Logout' },
    ]
    return (
      <Dropdown links={_links} badge={funct(this.props.badge)}>
        {slugify(user.username)}
      </Dropdown>
    )
  }
}

export default connect((props) => {
  const { user, refetch } = props.auth
  const next = (slug) => config.makeNextUrl(slug, window.location.pathname)
  return user ? (
    <UserDropdown
      user={user}
      refetch={refetch}
      links={props.links}
      badge={props.badge}
    />
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
