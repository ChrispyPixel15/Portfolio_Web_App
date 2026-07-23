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
import Art from './pages/pixelart'

function App() {
  const [pageNum, setPageNum] = useState(0)
  const [open, setOpen] = useState(false)

  function choosePage(num) {
    setPageNum(num);
    console.log(num);
    setOpen(false);
  }

  return (
    <>
      <section className='main-page'>
        <nav>
          <div className='navigation'>
            {
              navigationInfo.map((butt) => {
                if (butt.id === 0) {
                  return <NavigationComponent key={butt.id} name={butt.name} pos={"start"} navFunction={() => choosePage(butt.id)}/>
                }
                else if (butt.id === 5) {
                  return <NavigationComponent key={butt.id} name={butt.name} pos={"end"} navFunction={() => choosePage(butt.id)}/>
                }
                else {
                  return <NavigationComponent key={butt.id} name={butt.name} pos={"mid"} navFunction={() => choosePage(butt.id)}/>
                }
              })
            }
          </div>
          <div className={open ? "hamburger-open" : "hamburger-closed"} onClick={() => setOpen(!open)}>
            <div className='line-one'></div>
            <div className='line-two'></div>
            <div className='line-three'></div>
          </div>
          <div className={open ? "ham-menu-open" : "ham-menu-closed"}>
              {
                navigationInfo.map((butt) => {
                  if (butt.id === 0) {
                    return <NavigationComponent key={butt.id} name={butt.name} pos={"start"} navFunction={() => choosePage(butt.id)}/>
                  }
                  else if (butt.id === 5) {
                    return <NavigationComponent key={butt.id} name={butt.name} pos={"end"} navFunction={() => choosePage(butt.id)}/>
                  }
                  else {
                    return <NavigationComponent key={butt.id} name={butt.name} pos={"mid"} navFunction={() => choosePage(butt.id)}/>
                  }
                })
              }
          </div>
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
              <Art />
            ) :
            pageNum === 3 ? (
              <Skills />
            ) :
            pageNum === 4 ? (
              <Experience />
            ) : 
            pageNum === 5 ? (
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
