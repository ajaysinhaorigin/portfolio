import React from 'react'
interface Props {
  heading: string
  alignment: string
}

function Heading({ heading, alignment }: Props) {
  return (
    <div className={` ${alignment} text-3xl`}>
      <h2 className="logo_and_heading font-bold">{heading}</h2>
    </div>
  )
}

export default Heading
