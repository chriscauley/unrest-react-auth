import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from '@unrest/core'

import api from './api'

export default function AuthNav({links=[]}) {
  const { loading, user, refetch } = api.use()
  if (loading) {
    return null
  }
  if (user) {
    const logout = () => fetch('/api/logout/').then(() => refetch())
    links.push({ children: 'Logout', onClick: logout })
    return <Dropdown links={links} title={user.username} />
  }
  return (
    <div className="text-blue-700 underline text-lg">
      <Link to="/login/" className="mx-4">
        Login
      </Link>
      <Link to="/signup/">Sigup</Link>
    </div>
  )
}