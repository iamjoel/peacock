import React, { useState } from 'react'
import {
  useCSVDownloader,
  useCSVReader,
} from 'react-papaparse'
import cn from 'classnames'
import { useBoolean, useLocalStorageState } from 'ahooks'
import Button from '@site/docs/libs/components/base/button/button'
import { defaultOrder } from './config'
import s from './style.module.css'

function CSVIcon() {
  return <svg className='shrink-0' width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="File Icons/csv">
      <g id="sharp" filter="url(#filter0_d_6816_769)">
        <path d="M4 7.73398C4 5.49377 4 4.37367 4.43597 3.51802C4.81947 2.76537 5.43139 2.15345 6.18404 1.76996C7.03969 1.33398 8.15979 1.33398 10.4 1.33398H18.6667L28 10.6673V24.2673C28 26.5075 28 27.6276 27.564 28.4833C27.1805 29.2359 26.5686 29.8478 25.816 30.2313C24.9603 30.6673 23.8402 30.6673 21.6 30.6673H10.4C8.15979 30.6673 7.03969 30.6673 6.18404 30.2313C5.43139 29.8478 4.81947 29.2359 4.43597 28.4833C4 27.6276 4 26.5075 4 24.2673V7.73398Z" fill="#169951" />
      </g>
      <g id="CSV" opacity="0.96">
        <path d="M13.0846 21.8908C12.8419 23.3562 11.8246 24.0562 10.5646 24.0562C9.78992 24.0562 9.20192 23.7948 8.71659 23.3095C8.01659 22.6095 8.04459 21.6762 8.04459 20.6775C8.04459 19.6788 8.01659 18.7455 8.71659 18.0455C9.20192 17.5602 9.78992 17.2988 10.5646 17.2988C11.8246 17.2988 12.8419 17.9988 13.0846 19.4642H11.4233C11.3206 19.0908 11.1153 18.7548 10.5739 18.7548C10.2753 18.7548 10.0513 18.8762 9.92992 19.0348C9.78059 19.2308 9.67792 19.4642 9.67792 20.6775C9.67792 21.8908 9.78059 22.1242 9.92992 22.3202C10.0513 22.4788 10.2753 22.6002 10.5739 22.6002C11.1153 22.6002 11.3206 22.2642 11.4233 21.8908H13.0846Z" fill="white" />
        <path d="M18.4081 21.9655C18.4081 23.3188 17.2414 24.0562 15.8414 24.0562C14.8241 24.0562 13.9934 23.8695 13.3214 23.1788L14.3668 22.1335C14.7121 22.4788 15.3188 22.6002 15.8508 22.6002C16.4948 22.6002 16.8028 22.3855 16.8028 22.0028C16.8028 21.8442 16.7654 21.7135 16.6721 21.6108C16.5881 21.5268 16.4481 21.4615 16.2334 21.4335L15.4308 21.3215C14.8428 21.2375 14.3948 21.0415 14.0961 20.7335C13.7881 20.4162 13.6388 19.9682 13.6388 19.3988C13.6388 18.1855 14.5534 17.2988 16.0654 17.2988C17.0174 17.2988 17.7361 17.5228 18.3054 18.0922L17.2788 19.1188C16.8588 18.6988 16.3081 18.7268 16.0188 18.7268C15.4494 18.7268 15.2161 19.0535 15.2161 19.3428C15.2161 19.4268 15.2441 19.5482 15.3468 19.6508C15.4308 19.7348 15.5708 19.8188 15.8041 19.8468L16.6068 19.9588C17.2041 20.0428 17.6334 20.2295 17.9134 20.5095C18.2681 20.8548 18.4081 21.3495 18.4081 21.9655Z" fill="white" />
        <path d="M24.4166 17.3548L22.214 24.0002H21.0006L18.8073 17.3548H20.4966L21.6166 21.0695L22.718 17.3548H24.4166Z" fill="white" />
      </g>
      <path id="bevel" opacity="0.5" d="M18.6667 1.33398L28.0001 10.6673H21.3334C19.8607 10.6673 18.6667 9.47341 18.6667 8.00065V1.33398Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_6816_769" x="2" y="0.333984" width="28" height="33.334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6816_769" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6816_769" result="shape" />
      </filter>
    </defs>
  </svg>
}

const ORDER_STORAGE_KEY = 'csv-row-order'

export function CSVReader({
  onFinish,
  children,
}) {
  const { CSVReader } = useCSVReader()
  const [zoneHover, setZoneHover] = useState(false)

  const [order, setOrder] = useLocalStorageState<string[]>(ORDER_STORAGE_KEY, {
    defaultValue: defaultOrder,
  })

  const [isParsed, {
    setTrue: setParsed,
  }] = useBoolean(false)

  const handleMove = (from: number, to: number) => {
    const newOrder = [...order]
    const [removed] = newOrder.splice(from, 1)
    newOrder.splice(to, 0, removed)
    setOrder(newOrder)
  }

  const handleMoveUp = (index: number) => {
    return () => {
      if (index === 0)
        return
      handleMove(index, index - 1)
    }
  }

  const handleMoveDown = (index: number) => {
    return () => {
      if (index === order.length - 1)
        return
      handleMove(index, index + 1)
    }
  }

  const toSortedData = (res) => {
    const header = res[0]
    const sortedDate = []
    order.forEach((name) => {
      const item = res.find(row => row[0] === name)
      if (item)
        sortedDate.push(item)
    })
    return sortedDate.map((row) => {
      const obj: Record<string, string> = {}
      header.forEach((key, i) => {
        obj[key] = row[i]
      })
      return obj
    })
  }

  return (
    <>
      <CSVReader
        onUploadAccepted={(results: any) => {
          onFinish(toSortedData(results.data.filter(row => !!row[0])))
          setZoneHover(false)
          setParsed()
        }}
        onDragOver={(event: DragEvent) => {
          event.preventDefault()
          setZoneHover(true)
        }}
        onDragLeave={(event: DragEvent) => {
          event.preventDefault()
          setZoneHover(false)
        }}
      >
        {({
          getRootProps,
          acceptedFile,
        }: any) => (
          <>
            <div
              {...getRootProps()}
              className={cn(s.zone, zoneHover && s.zoneHover, acceptedFile ? 'px-6' : 'justify-center border-dashed text-gray-500')}
            >
              {acceptedFile
                ? (
                  <div className='w-full flex items-center space-x-2'>
                    <CSVIcon />
                    <div className='flex w-0 grow'>
                      <span className='max-w-[calc(100%_-_30px)] text-ellipsis whitespace-nowrap overflow-hidden'>{acceptedFile.name.replace(/.csv$/, '')}</span>
                      <span className='shrink-0 text-gray-500'>.csv</span>
                    </div>
                  </div>
                )
                : (
                  <div className='flex items-center justify-center space-x-2'>
                    <CSVIcon />
                    <div>上传文件</div>
                  </div>
                )}
            </div>
          </>
        )}
      </CSVReader>
      {isParsed && (
        <div className='mt-2'>
          {children}
        </div>
      )}
      <div className='mt-2 max-h-[50vh] overflow-auto'>
        <table className='w-full' style={{ display: 'table' }}>
          <thead>
            <tr>
              <th className='w-[50px]'>No</th>
              <th>项目名称</th>
              <th className='w-[150px]'>操作</th>
            </tr>
          </thead>
          <tbody>
            {order.map((name, i) => (
              <tr key={i}>
                <td className='w-[50px]'>{i + 1}</td>
                <td >{name}</td>
                <td className='w-[150px]'>
                  <div className='flex w-full items-center space-x-2'>
                    {i !== 0 && <button onClick={handleMoveUp(i)}>上移</button>}
                    {i !== order.length - 1 && <button onClick={handleMoveDown(i)}>下移</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export function CSVDownloader({ payload }) {
  const { CSVDownloader, Type } = useCSVDownloader()

  return (
    <CSVDownloader
      className="!underline cursor-pointer"
      type={Type.Link}
      filename={'sort-result'}
      bom={true}
      config={{
        delimiter: ';',
      }}
      data={payload}
    >
      <Button className='w-full justify-center' type='primary'>下载</Button>
    </CSVDownloader>
  )
}

// {/* progressbar */}
// {/* <div className={s.progressBar}>
//   <ProgressBar />
// </div> */}
// {/* remove */}
// {/* <div
//   {...getRemoveFileProps()}
//   className={s.remove}
//   onMouseOver={(event: Event) => {
//     event.preventDefault();
//     setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
//   }}
//   onMouseOut={(event: Event) => {
//     event.preventDefault();
//     setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
//   }}
// >
//   <Remove color={removeHoverColor} />
// </div> */}
