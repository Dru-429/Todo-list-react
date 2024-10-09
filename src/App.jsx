import React from 'react'
import Header from './components/Header'
import TaskContainer from './components/TaskContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-w-screen min-h-screen bg-zinc-950 text-zinc-100 flex flex-col gap-10 items-center relative'>
      <Header />
      <TaskContainer />
      <Footer />
    </div>
  )
}

export default App