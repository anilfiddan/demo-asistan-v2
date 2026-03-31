import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DemoPage from './pages/DemoPage'
import { DEMOS } from './data/demos'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {DEMOS.map(demo => (
          <Route key={demo.slug} path={`/demo/${demo.slug}`} element={<DemoPage demo={demo} />} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}
