import { Bolt, Home, ShieldCheck, Siren } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Electrical Services',
    description: 'Expert wiring, circuit repairs, and panel upgrades for your home or office.',
    icon: <Bolt className="text-orange-500" size={32} />,
    href: '/services/electrical',
    color: 'bg-blue-50',
  },
  {
    title: 'Appliance Repair',
    description: 'Fast diagnostics and repair for ACs, Fridges, and Washing Machines.',
    icon: <Home className="text-orange-500" size={32} />,
    href: '/services/appliances',
    color: 'bg-blue-50',
  },
  {
    title: 'CCTV & Security',
    description: 'High-definition camera installation and smart monitoring setups.',
    icon: <ShieldCheck className="text-orange-500" size={32} />,
    href: '/services/cctv',
    color: 'bg-blue-50',
  },
  {
    title: 'Emergency Service',
    description: 'Critical electrical failure? Our technicians arrive in 45 minutes.',
    icon: <Siren className="text-red-600" size={32} />,
    href: '/services/emergency',
    color: 'bg-red-50',
    isEmergency: true,
  },
];

const ServiceGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-blue-900 text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Our Expert Services
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Reliable solutions for your home and business, delivered by certified professionals.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link 
              href={service.href} 
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-blue-100 ${service.color}`}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${service.isEmergency ? 'text-red-700' : 'text-blue-900'}`}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <span className="inline-flex items-center text-sm font-bold text-blue-900 group-hover:translate-x-2 transition-transform">
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;