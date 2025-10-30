import React from 'react'
import Book from './component/Book'
import { Header } from './component/header'
import { Footer } from './component/footer'


const App = () => {
  return (

    <>
    <Header/>
    <div className='booklist'>
      <Book/>
      <Book/>
      <Book/>
    </div>
    <Footer/>

    </>

  )
}

export default App
