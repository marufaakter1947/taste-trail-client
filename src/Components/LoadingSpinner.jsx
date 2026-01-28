import { RingLoader} from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-62' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <RingLoader  size={100} color='red' />
    </div>
  )
}

export default LoadingSpinner
