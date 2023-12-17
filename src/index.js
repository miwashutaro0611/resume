import { marked } from 'marked'
import axios from 'axios'

const elemContent = document.getElementById('mdContainer')

axios.get('../README.md').then((response) => {
  elemContent.innerHTML = marked.parse(response.data)
})
