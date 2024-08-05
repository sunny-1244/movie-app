import axios from 'axios';

const instance = axios.create({  
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTUzOTc3NjM0NmI5NjVhMGZlYmQwODU0NGRkZjA1MyIsIm5iZiI6MTcyMjU5Mjc4OS4yMzM5NTcsInN1YiI6IjY1ZjgyNTBhZTE5NGIwMDE3Y2MwYzA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MWt0SnFEcnVDMJAIVEBpYbblsdXYLlH7IGXPXxu_Pas'
  }
})

export default instance;