/* eslint-disable react/jsx-indent */
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import styles from './CheckButton.module.css'
import { useState } from 'react'
import { TASK } from '@/constants'

export default function CheckButton ({ task, actionOnClick }) {
  const [checked, setChecked] = useState(task.complete)

  return (
    <>
    <label htmlFor={task.id} className='cursor-pointer'>
        <input
          type='checkbox'
          id={task.id}
          checked={checked}
          name={TASK.complete}
          className='hidden'
          onChange={(e) => {
            e.preventDefault()
            setChecked(e.target.checked)
            actionOnClick(e)
          }}
        />
      {checked
        ? <CheckCircleIcon className='h-6 w-6 text-secondary1' />
        : <div className={`${styles.iconContainer} h-6 w-6 flex justify-center items-center`}>
          <PanoramaFishEyeIcon className='h-6 w-6 text-secondary2' />
          <CheckCircleIcon className='h-6 w-6 text-secondary1 transition-opacity opacity-50 active:opacity-100' />
          </div>}
    </label>
    </>
  )
}
