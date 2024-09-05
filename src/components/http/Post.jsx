import { useState, useEffect } from 'react'
export default function Post() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [response, setResponse] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        })
      })
      const result = await res.json()
      setResponse(result)
    } catch (error) {
      console.error('Error creating data:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
        <button type="submit">Create Post</button>
      </form>
      {response && <div>Created Post ID: {response.id}</div>}
    </div>
  )
}
