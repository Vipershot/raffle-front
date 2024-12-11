
import { ColorRing } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className=' flex w-full justify-center h-[40vh] items-center'>
    <ColorRing
  height="80"
  width="80"
  colors={['#f07151', '#f07151', '#f47e60', '#f47e60', '#f47e60']}

  ariaLabel="three-dots-loading"
/>
</div> 
  )
}
