import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid'; // Import the new component

export default function Home() { 
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <ServiceGrid /> {/* Added Service Grid */}
        
        {/* Placeholder for Booking Section */}
        <section className="bg-white py-20 text-center">
            <p className="text-gray-400">Booking Form & About Us sections coming next...</p>
        </section>
      </div> 
    </main>
  );
}