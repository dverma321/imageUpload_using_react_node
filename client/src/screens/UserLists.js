import React from 'react'
import Title from '../components/Title'
import UserCards from '../components/UserCards'
import UserData from '../Utils/userLists'

function UserLists() {
  return (
    <div>
        <Title title="Best Example of using component that requires most company" />
        {
            UserData.map(({name, email, work}) => (
                <UserCards name={name} email={email} work={work} /> // here left hand side value should be matched with database entry
              
            ))
        }

        

    </div>
  )
}

export default UserLists