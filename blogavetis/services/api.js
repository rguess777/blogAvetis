import axios from 'axios'

export const makeClient = () =>
  axios.create({
    baseURL: "http://localhost:5435/",
  })