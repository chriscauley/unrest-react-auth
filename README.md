# @unrest/react-auth

This is a collection of react components and hooks for handling authentication in React. This is shared functionality accross my apps, so I do not have any plans right now to formally open source it. If you have questions feel free to contact me.

``` javascript
// in app.js
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import auth from '@unrest/react-auth'

import Nav from './components/Nav'
import Settings from './screens/settings'

const App = () => {
  return (
    <HashRouter>
      {/* other routes here */}
      <auth.Routes />
      <Route path="/settings/" component={Settings} />
    </HashRouter>
  )
}
```

Add the AuthNav component to the nav. This shows login+signup links when user is annonymous and will show specified links + logut when the user is authorized.

``` javascript
// in Nav.js
import React from 'react'
import auth from '@unrest/react-auth'

export default function Nav() {
  const auth_links = [
    { children: 'Settings', to: '/settings/' }
  ]
  return (
    <nav>
      {/* rest of nav */}
      <auth.AuthNav links={auth_links}
    </nav>
  )
}
```

Components that need to use the user can either use `const Component = auth.required(BaseComponent)`, which will redirect to `/login/` if user is not authenticated and will have access to auth via `const { user, markStale, refetch } = this.props.auth`. Alternately, there is also the `auth.use` pattern as follows:

``` javascript
// in Settings.js

import React from 'react'
import auth from '@unrest/react-auth'

function Settings() {
  const { user } = auth.use()
  if (!user && loading) {
    return null
  }
  if (!user) {
    return "You are not logged in!"
  }
  return (
    <div>
      <div>username: {user.username}</div>
      <div>email: {user.email}</div>
    </div>
  )
}
```