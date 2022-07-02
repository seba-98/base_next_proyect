import Head from 'next/head'
import React, { FC } from 'react'

interface Props{
    children: JSX.Element,
    title:string,
    pageDescription:string,
    imageFullUrl?:string
}

export const mainLayout:FC<Props> = ({children, title='title', pageDescription='desc', imageFullUrl}) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageFullUrl} />
        <title>{title}</title>
      </Head>

      <main>
        {children}
      </main>
      <footer>
            {/* FOOTER */}
      </footer>
    </>
  )
}
