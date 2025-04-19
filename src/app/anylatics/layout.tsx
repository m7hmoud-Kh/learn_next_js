"use client"
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

const templateAnylatics = ({childern} : {childern: ReactNode}) => {
    const [name, setName] = useState("")
  return (
    <div>
        <input type="text"
        className='border'
        value={name}
        onChange={(e) => setName(e.target.value)} />
        <div>
            <Link href={"/anylatics/revene"}>
                Revene
            </Link>
            <br />

            <Link href={"/anylatics/state"}>
                state
            </Link>
        </div>

        {childern}
    </div>
  )
}

export default templateAnylatics