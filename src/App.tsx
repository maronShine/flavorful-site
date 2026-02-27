import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Chefs from './components/Chefs';
import Offers from './components/Offers';
import Events from './components/Events';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] font-sans selection:bg-amber-100 selection:text-amber-900">
      <Toaster position="top-center" expand={true} richColors />
      <Header />
      <main>
        <Hero />
        <Menu />
        <Reservations />
        <Offers />
        <Chefs />
        <Events />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;