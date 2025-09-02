import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState(null)
  const [name, setName] = useState("")
  const fetchData = async (searchData) => {
    const response = await fetch(`https://dummyjson.com/users/search?q=${searchData}`)
    const result = await response.json()
    setData(result.users || []);
  }

  useEffect(() => {
    fetchData(search)
  }, [search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
    const selectName = (e) => {
    setName(e.target.value)
  }
  
  return (
    <div>
      <div className="border-blue-600 rounded-2xl border-2 p-4 m-4">
        <input 
          type="text" 
          placeholder="Search For a User.." 
          value={search} 
          className="w-full border-0"
          onChange={handleSearch}
        />
      </div>
      {data.length > 0 && (
        <div className="m-4 p-1.5 border rounded-2xl">
          {data.map(user => (
            <div key={user.id} className="border p-4 mb-2 rounded-xl">
              <button className="font-bold" onClick={selectName} value={user.firstName}>{user.firstName} {user.lastName}</button>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}

export default App