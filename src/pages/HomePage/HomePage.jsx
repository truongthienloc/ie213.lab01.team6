import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import style from '~/styles/home.module.css'

export default function HomePage() {
  return (
    <div className=''>
        <h1>Các trang chức năng</h1>
        <div className={clsx(style['navigation'])}>
            <Link to={'/result'}>
                Kết quả học tập
            </Link>
            <Link to={'/follow'}>
                Theo dõi học tập
            </Link>
            <Link to={'/reservation'}>
                Thông tin đặt chỗ
            </Link>
        </div>
    </div>
  )
}
