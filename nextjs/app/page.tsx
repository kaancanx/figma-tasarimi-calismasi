import Header from './Component/Header'
import Employers from './Component/Employers'
import About from './Component/About'
import Contract from './Component/Contract'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-100 text-center">
      <Header />
      <About />
      <Employers />
      <Contract />
    </div>
  )
}
