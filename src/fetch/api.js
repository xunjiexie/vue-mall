import { httpGet } from './http.js'

export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })
