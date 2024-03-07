import React from 'react'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'
import style from '~/styles/defaultLayout.module.css'


export default function DefaultLayout() {

  return (
    <main className={clsx(style['wrapper'])}>
      <Outlet />
    </main>
  )
}
