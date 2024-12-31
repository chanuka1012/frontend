import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/Register">Go to the register page</Link>
    </div>
  );
}
