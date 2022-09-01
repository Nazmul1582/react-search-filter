import React, { useState } from 'react'
import './App.css';
import { Users } from './users'

function App() {
  const [query, setQuery] = useState("");
  const keys = ['first_name', "last_name", "email"];
  return (
    <div className="wrapper">
      <h1>React Search Filter</h1>
      <div className='searchArea'>
        <input
          type="text"
          placeholder="Search...."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='result'>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
            </tr>            
          </thead>
          <tbody>
            {
              Users.filter(user => 
                keys.some(key => user[key].toLowerCase().includes(query)
              )).map(ele => (
                <tr key={ele.id}>
                  <td>{ele.first_name}</td>
                  <td>{ele.last_name}</td>
                  <td>{ele.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>        
      </div>
    </div>
  );
}

export default App;
