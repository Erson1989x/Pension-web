import React from "react";
import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-b from-primary-dark to-black text-white">
    <div className="container-width section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-3xl font-heading font-bold mb-6 text-gradient">Pensiunea Vilcan</h3>
          <p className="text-gray-300 mb-6">
            Experiențe memorabile într-un cadru natural spectaculos.
          </p>
          <div className="flex space-x-4">
            <SocialIcon href="#" icon="facebook" />
            <SocialIcon href="#" icon="instagram" />
            <SocialIcon href="#" icon="twitter" />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-heading font-bold mb-6">Link-uri Rapide</h4>
          <ul className="space-y-3">
            <FooterLink href="/rooms">Camere</FooterLink>
            <FooterLink href="/activities">Activități</FooterLink>
            <FooterLink href="/gallery">Galerie</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-heading font-bold mb-6">Contact</h4>
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 mt-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>DC192 37, Fundoaia <br />Sarmas, Romania</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+49 170 312 3905</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>pensiuneavilcan@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white border-opacity-10 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Pensiunea Vilcan. Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
