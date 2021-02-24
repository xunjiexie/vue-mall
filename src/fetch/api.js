// eslint-disable-next-line no-unused-vars
import { httpGet, httpPost } from './http.js'

export const getCategoryList = (params = {}) => httpGet({ url: '/data/category.json', params })

export const getCategoryContent = (params = {}) => httpGet({ url: '/data/category_hot.json', params })
