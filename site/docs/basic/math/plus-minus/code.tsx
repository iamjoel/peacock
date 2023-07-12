'use client'
import type { FC } from 'react'
import React, { useState } from 'react'
import { Button } from '@arco-design/web-react'

type RES = {
  left: number
  right: number
  op: string
  res: number
}

// 20 以内加减法
function genRandomNumber(max = 10) {
  const res = Math.round((Math.random()) * max)
  if (res === 0)
    return 1

  if (res > max)
    return max

  return res
}
function genPlus() {
  const left = genRandomNumber()
  const right = genRandomNumber()
  return {
    left,
    right,
    op: '+',
    res: left + right,
  }
}

function genMinus() {
  const left = genRandomNumber(20)
  const right = genRandomNumber(left)
  return {
    left,
    right,
    op: '-',
    res: left - right,
  }
}

function gen() {
  return Math.random() > 0.5 ? genPlus() : genMinus()
}
const PlusMinus: FC = () => {
  const [current, setCurrent] = useState<RES>(gen())
  return (
    <div className='w-[300px] mx-auto'>
      <div className='flex justify-end'>
        <Button type='primary' onClick={() => setCurrent(gen())}>下一题</Button>
      </div>
      <div className='mt-3 flex items-center justify-center text-[80px]'>
        {current.left} {current.op} {current.right} =
      </div>
    </div>
  )
}
export default React.memo(PlusMinus)
