import Body from '@/components/Body'
import Header from '@/components/Header/Header'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import style from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [list, setList] = useState<string[]>([]);

  // setList(['12', '234'])

  return (
    <div className={style.container}>
      <Header list={list}  setList={setList} />
      <Body list={list}  setList={setList} />
    </ div>
  )
}
