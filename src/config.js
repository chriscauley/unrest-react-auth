const schema = {
  properties: {
    email: { type: 'string', title: 'Email', format:'email' },
    password: { type: 'string', title: 'Password' },
  },
  required: ['email', 'password'],
}

const config = {
  login_redirect: '/',
  makeUrl: (target, next = '') =>
    config[target].next_url.replace(':next', encodeURIComponent(next)),
  login: {
    url: '/login/',
    next_url: '/login/:next',
    post_url: '/api/auth/login/',
    schema: {
      title: 'Login To Continue',
      ...schema,
    },
  },
  signup: {
    url: '/signup/',
    next_url: '/signup/:next',
    post_url: '/api/auth/signup/',
    schema: {
      title: 'Signup To Continue',
      ...schema,
    },
  },
  logout: {
    url: '/logout/',
    post_url: '/api/auth/logout/',
  },
  prepData: (data) => data,
}

export default config
