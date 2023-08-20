/* eslint-disable react/jsx-indent */
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import styles from './CheckButton.module.css'

export default function CheckButton ({ checked, actionOnClick }) {
  return (
    <button onClick={actionOnClick}>
      {checked
        ? <CheckCircleIcon className='h-6 w-6 text-secondary1' />
        : <div className={styles.iconContainer}>
          <PanoramaFishEyeIcon className='h-6 w-6 text-secondary2' />
          <CheckCircleIcon className='h-6 w-6 text-secondary1 transition-opacity opacity-50 active:opacity-100' />
          </div>}
    </button>
  )
}
