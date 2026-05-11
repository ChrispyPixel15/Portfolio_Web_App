import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { navigationInfo } from './data/navigationData'
import NavigationComponent from './components/navigationComponent'
import Projects from './pages/projects'
import Home from './pages/home'
import Skills from './pages/skills'
import Experience from './pages/experience'
import Contact from './pages/contact'

function App() {
  const [pageNum, setPageNum] = useState(0)

  function choosePage(num) {
    setPageNum(num);
    console.log(num);
  }

  return (
    <>
      <section className='main-page'>
        <nav className='navigation'>
          {
            navigationInfo.map((butt) => {
              if (butt.id === 0) {
                return <NavigationComponent key={butt.id} name={butt.name} pos={"start"} navFunction={() => choosePage(butt.id)}/>
              }
              else if (butt.id === 4) {
                return <NavigationComponent key={butt.id} name={butt.name} pos={"end"} navFunction={() => choosePage(butt.id)}/>
              }
              else {
                return <NavigationComponent key={butt.id} name={butt.name} pos={"mid"} navFunction={() => choosePage(butt.id)}/>
              }
            })
          }
        </nav>
        <article className='main-content'>
          {
            pageNum === 0 ? (
              <Home />
            ) : 
            pageNum === 1 ? (
              <Projects />
            ) : 
            pageNum === 2 ? (
              <Skills />
            ) :
            pageNum === 3 ? (
              <Experience />
            ) : 
            pageNum === 4 ? (
              <Contact />
            ) : (<Home />)
          }
        </article>      
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Christine Holt. All rights reserved.</p>
      </footer>
    </>
    
  )
}

export default App
