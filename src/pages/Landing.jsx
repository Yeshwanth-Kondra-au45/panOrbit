import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { getUsersList } from '../api'

export async function loader() {
  const data = await getUsersList()
  return data
}
export function Landing() {
  const usersData = useLoaderData()
  const usersElements = usersData.users.map((e) => (
    <Link to={`/profile/${e.id}`} state={{
      user: e,
      usersData: usersData
    }}
      key={e.id}
    >
      <div className="user-details" >
        <img src={e.profilepicture} alt="" className='user-image' />

        <p>{e.name}</p>
      </div>
    </Link>
  ))
  return (
    <section className='intro'>
      <div className="landing-background">
        <div className="users-box">
          <h3 className="users-title">Select an account</h3>
          <div className='user'>
            {usersElements}
          </div>
        </div>
      </div>
    </section>
  )
}
