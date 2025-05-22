import type { FC } from 'react'
import PhotoFeed from './components/PhotoFeed'
import PostComposer from './components/PostComposer'
import './App.css'

const App: FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Photo Sharing App</h1>
      </header>
      <main className="app-main">
        <PhotoFeed />
        <PostComposer />
      </main>
    </div>
  )
}

export default App
