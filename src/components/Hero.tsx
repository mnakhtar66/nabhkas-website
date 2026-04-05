import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image - SEO Optimized Alt and Priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home_page.png"
          alt="Professional NABHKAS technician providing home electrical and appliance repair services"
          fill
          className="object-cover object-center"
          priority // Crucial for Core Web Vitals (SEO)
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-white">
          {/* Main H1 for SEO: Includes Brand and Primary Services */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Certified Electrical & <br />
            <span className="text-orange-400">Home Appliance Repairs</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-xl leading-relaxed">
            NABHKAS Private Limited: Your trusted partner for CCTV installation and 24/7 emergency electrical services in your city.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link 
              href="/booking" 
              title="Book a repair service online"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg text-center"
            >
              Book a Service Now
            </Link>
            <Link 
              href="/services" 
              title="View all maintenance services"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;