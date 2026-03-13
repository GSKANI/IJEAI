import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { loadData } from './data'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Scope from './pages/Scope'
import EditorialBoard from './pages/EditorialBoard'
import CurrentIssue from './pages/CurrentIssue'
import Guidelines from './pages/Guidelines'
import Contact from './pages/Contact'

export default function App() {
  const [data] = useState(loadData)

  return (
    <Routes>
      {/* Journal site */}
      <Route element={<Layout data={data} />}>
        <Route index              element={<Home          data={data} />} />
        <Route path="about"       element={<About         data={data} />} />
        <Route path="scope"       element={<Scope />} />
        <Route path="board"       element={<EditorialBoard data={data} />} />
        <Route path="issue"       element={<CurrentIssue  data={data} />} />
        <Route path="guidelines"  element={<Guidelines    data={data} />} />
        <Route path="contact"     element={<Contact       data={data} />} />
      </Route>
    </Routes>
  )
}
