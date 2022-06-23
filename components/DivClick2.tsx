import React, { FC, useState } from 'react'

interface card {
  text: string
  image: string
}

type Props = {
  card: card
}

export const DivClick2: FC<Props> = ({ card }) => {

    const [isActive, setIsActive] = useState<boolean>(false)
  const handleClickB = () => {
    //  toggle
    setIsActive((current) => !current)
  }


  return (
    <div
      onClick={handleClickB}
      style={{
        backgroundColor: isActive ? 'rgb(250, 2, 260)' : 'white',
        color: isActive ? 'black' : '',
      }}
      className="my-3 flex w-[45%] items-center gap-1 rounded-xl bg-white p-1"
    >
      <div
        className="h-14 w-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('${card.image}')`,
        }}
      />
      <span className="text-lg font-bold">{card.text}</span>
    </div>
  )
}
