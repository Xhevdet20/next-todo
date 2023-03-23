import Body from '@/components/Body'
import Header from '@/components/Header/Header'
import { ToDo } from '@/utils/types';
import { useState } from 'react'
import style from '../styles/Home.module.scss'

export default function Home() {

  const [list, setList] = useState<ToDo[]>([]);

  return (
    <div className={style.container}>
      <Header list={list}  setList={setList} />
      <Body list={list}  setList={setList} />
    </ div>
  )
}
