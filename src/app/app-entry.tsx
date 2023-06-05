import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/shared/base.css'
const root = document.getElementById('root') as HTMLElement


ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div className='min-h-screen flex flex-1 items-center justify-center text-center p-4'>
      <div className='max-w-lg'>
        <h1 className='text-primary font text-4xl font-black'>Welcome to Feature Sliced Boilerplate!</h1>
        <div className='mt-4 flex items-center text-center justify-center'>
          →
          <a className='underline' href='https://github.com/lcoutox/react-feature-sliced-boilerplate'>
            Clone the repository.
          </a>
        </div>
      </div>
    </div>
  </React.StrictMode>
)