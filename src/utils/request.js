import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: '127.0.0.1',
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
