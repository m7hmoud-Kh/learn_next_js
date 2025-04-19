"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const UserList = () => {
    const {id} = useParams();
    return (
        <div>UserList

            <h3>User Profile {id}</h3>
        </div>
    )
}

export default UserList