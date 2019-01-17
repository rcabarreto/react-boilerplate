import axios from 'axios'

const API_URL = `${process.env.API_PROTOCOL}://${process.env.API_URL}:${process.env.API_PORT}${process.env.API_PATH}`

export default {

  getLogsTail(logsOffset) {
    // /logs/tail/{offset}
    return axios.get(`${API_URL}/logs/tail/${logsOffset}`, { timeout: 5000 }).then(response => response.data).catch(error => Promise.reject(error.message))
  },

}
