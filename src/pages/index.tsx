import Head from 'next/head'
import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-black text-white scroll-smooth'>
      <Head>
        <title>Martin Bartolo</title>
      </Head>
      
      <Header />

      { /* Hero */ } 
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      { /* Skills */ }
      <section id="skills" className='snap-center'>
        <Skills />
      </section>
      
      { /* Experience */ }
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      { /* About */ }
      <section id="about" className='snap-center'>
        <About />
      </section>

      { /* Contact Me */ }
      <section id="contact" className='snap-end'>
        <Contact />
      </section>

      <Footer />

    </div >
  )
}
