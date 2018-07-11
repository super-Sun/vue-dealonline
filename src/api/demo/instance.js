import { createAPI } from '../util'
import config from '../config'

const baseUrl = {
  mock: 'http://192.168.0.151:7300/mock/5b4440852df4ee54679433e0/example',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock']

export default createAPI(baseUrl)
