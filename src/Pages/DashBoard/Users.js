import React from 'react';

const Users = () => {
   
    return (
        <div>
            <h1 className='text-xl'>This All user :</h1>
        </div>
    );
};

export default Users;

// const {data: users, isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res => res.json()))
// if(isLoading){
//     return <Loading></Loading>
// }