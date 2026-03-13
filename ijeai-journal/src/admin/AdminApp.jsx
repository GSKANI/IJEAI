import { useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

export default function AdminApp() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('admin123')

  if (!authed) return <Login onLogin={setAuthed} adminPw={pw} />
  return <Dashboard onLogout={() => setAuthed(false)} pw={pw} setPw={setPw} />
}
