import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../config/contact';

const socials = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

export default function HeroSocials() {
  return (
    <div className="flex justify-center gap-6">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
            hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}