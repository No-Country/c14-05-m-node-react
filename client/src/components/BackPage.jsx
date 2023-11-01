import { useNavigate } from 'react-router-dom';

function BackPage({WhereBack}) {
  const navigate = useNavigate();
  return (
    <>
        <h1 className='flex space-x-2'>
            <img src='/IconBack.svg' onClick={() => navigate(-1)}/>
            <div>{WhereBack}</div>
        </h1>
    </>
  )
}

export default BackPage