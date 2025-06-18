import Header from '@/components/Header'
import MobileNavigation from '@/components/MobileNavigation'
import Sidebar from '@/components/Sidebar'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { get } from 'http'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({children}:{children:React.ReactNode}) => {

    const currentUser = await getCurrentUser();
    if(!currentUser) return redirect('/sign-in')


  return (
    <main className='flex h-screen'>
        <Sidebar {...currentUser}/>
        <section>
            <MobileNavigation/> <Header/>
            <div className='main-content'>{children}</div>
        </section>
    </main>
  )
}

export default layout