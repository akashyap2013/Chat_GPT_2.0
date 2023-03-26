import Head from 'next/head'
import Image from 'next/image'

/** import all components */
import Aside from '../components/aside'
import Main from '../components/main'

export default function Home() {
  return (
   <div className='grid grid-cols-6'>
      <div className='bg-gray-900 col-span-1 aside z-10 text-gray-50'>
        <Aside></Aside>      
      </div>
      <div className='bg-gray-800 text-gray-50 col-span-5 min-h-screen h-full mb-40'>
        <Main></Main>      
        <h1>Search Bar</h1>        
      </div>
   </div>
  )
}
