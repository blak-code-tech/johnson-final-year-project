import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
      <>
          <Head>
              <title>groceri</title>
              <meta name="description" content="An Ecommerce site" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#111111" />
              <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
              <meta name="apple-mobile-web-app-status-bar" content="#111111" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className='transition duration-1000 ease-in-out overflow-hidden'>
              <>
                  <nav className='h-[86px] w-full bg-black'>
                      
                  </nav>
                  {children}
              </>
          </main>
      </>
  )
}

export default Layout