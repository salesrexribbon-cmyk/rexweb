import Link from 'next/link';
import { siteSettings, navLinks } from '@/lib/data/site-settings';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white-pure pt-20 pb-10 border-t-4 border-brand-green">
      <div className="container-inner">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-3xl font-bold font-outfit text-brand-white-pure mb-4 tracking-tight">
              Rex <span>International</span>
            </h3>
            <p className="text-brand-gray-light/70 text-sm leading-relaxed mb-6 max-w-sm">
              {siteSettings.description}
            </p>
            <div className="flex gap-4">
              {/* Fake Social Icons for Aesthetic */}
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-brand-white-pure/5 flex items-center justify-center border border-brand-white-pure/10 hover:bg-brand-green hover:border-brand-green transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-brand-gray-light/80 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-brand-white-pure mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-brand-gray-light/70 hover:text-brand-white-pure transition-colors text-sm font-medium"
                  >
                    <span className="w-2 h-[2px] bg-brand-green opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-brand-white-pure mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-brand-gray-light/70 hover:text-brand-white-pure transition-colors text-sm font-medium">OEM Part Procurement</Link></li>
              <li><Link href="/services" className="text-brand-gray-light/70 hover:text-brand-white-pure transition-colors text-sm font-medium">B2B & B2C Bulk Supply</Link></li>
              <li><Link href="/services" className="text-brand-gray-light/70 hover:text-brand-white-pure transition-colors text-sm font-medium">Component Repair</Link></li>
              <li><Link href="/services" className="text-brand-gray-light/70 hover:text-brand-white-pure transition-colors text-sm font-medium">Logistics Integration</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-brand-white-pure mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-gray-light/70">
              <li className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-brand-white-pure font-semibold">Phone Support:</span>
                {siteSettings.phones.map((phone) => (
                  <span key={phone}>{phone}</span>
                ))}
              </li>
              <li className="flex flex-col items-center sm:items-start gap-1 mt-2">
                <span className="text-brand-white-pure font-semibold">Email:</span>
                <a href={`mailto:${siteSettings.email}`} className="hover:text-brand-green transition-colors">{siteSettings.email}</a>
              </li>
              <li className="flex flex-col items-center sm:items-start gap-1 mt-2">
                <span className="text-brand-white-pure font-semibold">Headquarters:</span>
                <span className="max-w-[200px] leading-relaxed">{siteSettings.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-white-pure/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-gray-light/50 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteSettings.name}. All rights reserved. Built for Industry.
          </p>
          <div className="flex gap-6 text-xs text-brand-gray-light/50 font-medium">
            <Link href="/legal/privacy" className="hover:text-brand-white-pure transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-brand-white-pure transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
