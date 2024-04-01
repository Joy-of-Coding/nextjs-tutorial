import React from 'react'

// interface is used to describe what data is being returned from the
// fetch function.
interface User {
    //name: datatype
    id: number;
    name: string;
    email: string;
}

// async is needed because of await
const UsersPage = async () => {
    // because this returns a promiss we use await
    // cache is an optional argument
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {cache: 'no-store'});  // this line says not to store the data locally,
        // { next: { revalidate: 10} } );  this line will refetch the data every ten seconds 
    
    // we anotate the users to be the type User (the interface from above)
    // if there is no iterface    const users = await res.json();
    const users: User[] = await res.json();
  return (
    <>
        <h1>Users</h1>
        {/*
        a time stamp
        <p> {new Date().toLocaleTimeString()} </p>
        */}
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>User Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    </tr>) }
            </tbody>
        </table>

        {/*
        to put this in a list
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>) }
        </ul>
        */}
    </>
  )
}

export default UsersPage
