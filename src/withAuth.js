import RestHook from '@unrest/react-rest-hook'
import config from './config'

// this hook allow other state changes when auth is completed

const prepData = data => config.prepData(data)

export default RestHook('/api/auth/user.json', { propName: 'auth', prepData })
