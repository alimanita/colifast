import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Stats from './components/Stats';
import Process from './components/Process';
import About from './components/About';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Stats />
        <Process />
        <About />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
