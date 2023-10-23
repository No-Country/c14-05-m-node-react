import { Link } from 'react-router-dom'
import IconBack from '../../public/IconBack.svg?react'
function BackPage({WhereBack}) {
  return (
    <>
        <div className='flex space-x-2'>
            <Link to={"/"}>
              <IconBack />
            </Link>
            <div>{WhereBack}</div>
        </div>
    </>
  )
}

export default BackPage