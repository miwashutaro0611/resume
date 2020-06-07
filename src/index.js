import marked from 'marked'
import axios from 'axios'

axios.get('../README.md')
  .then(response => document.getElementById('mdContainer').innerHTML = marked(response.data));