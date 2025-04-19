import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <div>
            <li>Hello world section</li>
            <li>Hello world section</li>
            <li>Hello world section</li>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout