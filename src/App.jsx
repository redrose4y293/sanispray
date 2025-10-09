import Layout from './components/Layout'
import Home from './pages/Home'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import HowItWorks from './pages/HowItWorks'
import Features from './pages/Features'
import Gallery from './pages/Gallery'
import Specifications from './pages/Specifications'
import Installation from './pages/Installation'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Layout>
      <section id="home"><Home /></section>
      <section id="problem"><Problem /></section>
      <section id="solution"><Solution /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><Features /></section>
      <section id="gallery"><Gallery /></section>
      <section id="specifications"><Specifications /></section>
      <section id="installation"><Installation /></section>
      <section id="faq"><FAQ /></section>
      <section id="about"><About /></section>
      <section id="pricing"><Pricing /></section>
      <section id="contact"><Contact /></section>
    </Layout>
  )
}

export default App
