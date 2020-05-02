import React from 'react'
import { Link } from 'react-router-dom'
import css from '@unrest/css'

import config from './config'
import connect from './connect'

const badge_css = "bg-red-500 text-white rounded-full ml-2 w-6 h-6 flex items-center justify-center"
const slugify = username => (
  username.includes('@') ? (username.split('@')[0]+"@...") : username
)


class UserDropdown extends React.Component {
  state = {}
  toggle = () => this.setState({ open: !this.state.open })
  logout = () => fetch(config.logout.post_url).then(() => this.props.refetch())

  render() {
    const { user, badge, links=[] } = this.props
    const funct = value => typeof value === 'function' ? value(user) : value
    const _badge = funct(badge, badge)
    const processed_links = links.map(link => {
      link = funct(link)
      link.key = link.to
      if (link.badge) {
        link.text = (
          <div className="flex">
            {link.text}
            <span className={badge_css}>{link.badge}</span>
          </div>
        )
      }
      return link
    }).filter(Boolean)
    return (
      <div className={css.dropdown.outer()}>
        <div className={css.dropdown.toggle('flex')} onClick={this.toggle}>
          {slugify(user.username)}
          {_badge ? <span className={badge_css}>{_badge}</span> : ""}
        </div>
        <div
          className={css.dropdown.shelf(this.state.open ? 'block' : 'hidden')}
        >
          {processed_links.map(link => (
          <div className={css.dropdown.item()} key={link.key}>
            <Link to={link.to}>{link.text}</Link>
          </div>
          ))}
          <div className={css.dropdown.item()} onClick={this.logout}>
            Logout
          </div>
        </div>
      </div>
    )
  }
}

export default connect((props) => {
  const { user, refetch } = props.auth
  const next = (slug) => config.makeUrl(slug, window.location.pathname)
  return user ? (
    <UserDropdown user={user} refetch={refetch} links={props.links} badge={props.badge}/>
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
