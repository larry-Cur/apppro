import axios from 'axios'

const IP = 'http://127.0.0.1:5000'
// const IP = 'http://192.168.137.1:5000'
// 172.16.15.144
// const IP = 'http://192.168.1.6:5000'

axios.defaults.baseURL = IP

export var goodlist = () => axios.get('/goods/goods_list')

export var shoprats = () => axios.get('/shop/ratings')

export var shopseller = () => axios.get('/shop/seller')