// eslint-disable-next-line no-unused-vars
import { httpGet, httpPost } from './http.js'

export const getCategoryList = (params = {}) => httpGet({ url: '/data/category.json', params })

export const getCategoryContent = (params = {}) => httpGet({ url: '/data/category_hot.json', params })

export const getHomeSwiper = (params = {}) => httpGet({ url: '/data/home_swiper.json', params })

export const getHomeIcons = (params = {}) => httpGet({ url: '/data/home_icons.json', params })

export const getHomeGuess = (params = {}) => httpGet({ url: '/data/home_guess.json', params })
