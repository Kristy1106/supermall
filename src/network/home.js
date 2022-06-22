import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// 把一个数组放到另一个数组里
let totalNums = []
const nums1 = [20,11,222]
const nums2 = [111,222,333]

// for(let n of nums1) {
//   totalNums.push(n)
// }

//解构，依次塞到totalNums里面,之后num2再放数据的时候前数据依旧存在
totalNums.push(...nums1)
