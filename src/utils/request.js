import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888'
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
