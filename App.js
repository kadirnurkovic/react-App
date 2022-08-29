import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import './App.css'
import Posts from './components/Posts/Posts'

const BASE_URL = "https://api.quotable.io"
export default function App() {
  const [authors , setAuthors] = useState([])
  const [loading , setLoading] = useState(false)
  const [pagination, setPagination] = useState({})
  const [page ,setPage] = useState(1)

  function getAuthors(page) {
    axios.get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setPagination({
        page: res.data.page,
        lastPage: res.data.totalPages
      })
      setAuthors(res.data.results)})

  }

  useEffect(() => {
     getAuthors(page);
  }, [page]);

  return (
    <div className='card-container'>
      
      {authors.length > 0 ? (
        <div>
          <div>{pagination.page} / {pagination.lastPage}</div>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        {authors.map((author) => (
          <div key={author._id}>
          <h3>{author.name}</h3>
          <h4>{author.description}</h4>
          </div>
        ))}
        </div>
      ) : ( <p>Loading...</p>
        )}
    </div>
  )
}