import Head from 'next/head'
import { useState } from 'react'

/** import all components */
import Aside from '../components/aside'
import Main from '../components/main'
import Search from '../components/search'
import Loading from '../components/loading'
import Banner from '../components/banner'

import { useQuery } from 'react-query';
import { getAllRooms } from '../lib/request'


export default function Home() {

  const [roomid, setRoomid] = useState(null)
  const { isLoading, isError, data, error } = useQuery('rooms', getAllRooms)
  
  if(isLoading) return <Loading></Loading>;
  if(isError) return <div className='text-center'>Error : {error.message}</div>
  if(!data) return <div className="text-center">No Messages</div>

  function onRoomClick(roomid) {
    data.filter(room => {
      if(room._id === roomid){
        setRoomid(roomid)
      }
    })
  }

  return (
   <div className='grid grid-cols-6'>
      <div className='bg-gray-900 col-span-1 aside z-10 text-gray-50'>
        {
          data && <Aside getRooms={data} handler={onRoomClick}></Aside>
        }      
      </div>
      <div className='bg-gray-800 text-gray-50 col-span-5 min-h-screen h-full mb-40'>
        {
          roomid ? <Main roomid={roomid}></Main> : <Banner />
        }
        {
          roomid && <Search roomid={roomid}></Search>
        }      
                
      </div>
   </div>
  )
}
