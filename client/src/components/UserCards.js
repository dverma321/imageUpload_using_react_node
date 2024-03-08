import React from 'react'

function UserCards({name, email, work}) {
  return (
    <div>

        <div>
            <h1 style={{color:'Red'}}>{name}</h1>
            <p>{email}</p>
            <p>{work}</p>
        </div>

    </div>
  )
}

export default UserCards