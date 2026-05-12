import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { InvitationPage } from './components/InvitationPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/invitation/:inviterName" element={<InvitationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
