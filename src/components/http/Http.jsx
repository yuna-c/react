import { useState, useEffect } from 'react'
export default function Http() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get 요청 시, fetch는 method를 명시하지 않아도 돼요.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return <div>{data ? <div>{data.title}</div> : <div>Loading...</div>}</div>
}
