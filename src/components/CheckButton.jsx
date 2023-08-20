import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
export default function CheckButton ({ checked, actionOnClick }) {
  return (
    <button onClick={actionOnClick}>
      {checked ? <CheckCircleIcon className='h-6 w-6 text-secondary1' /> : <PanoramaFishEyeIcon className='h-6 w-6 text-secondary2' />}
    </button>
  )
}
