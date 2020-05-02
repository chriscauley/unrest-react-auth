import RestHook from '@unrest/react-rest-hook'
import config from './config'

const prepData = data => config.prepData(data)

export default RestHook('/api/auth/user.json', { propName: 'auth', prepData })
