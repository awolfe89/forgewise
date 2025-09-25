import { useState } from 'react';
import contactConfig from '../config/contact';

// Component for displaying phone numbers with basic protection
export function ProtectedPhone({ type = 'display' }) {
  const [revealed, setRevealed] = useState(false);
  
  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="text-blue-600 hover:text-blue-700 underline focus:outline-none"
        aria-label="Click to reveal phone number"
      >
        Click to show number
      </button>
    );
  }
  
  return type === 'link' ? (
    <a href={`tel:${contactConfig.phoneLink}`} className="text-blue-600 hover:text-blue-700">
      {contactConfig.phoneDisplay}
    </a>
  ) : (
    <span>{contactConfig.phoneDisplay}</span>
  );
}

// Component for emergency contact - less protection due to urgency
export function EmergencyContact() {
  return (
    <div className="flex items-center gap-2">
      <span className="animate-pulse">🚨</span>
      <span>Site emergency? Text us RIGHT NOW: </span>
      <ProtectedPhone type="link" />
    </div>
  );
}

// Component for Calendly links
export function BookingLink({ type = 'discovery', className = '', children }) {
  const links = {
    discovery: contactConfig.calendly.discovery,
    consultation: contactConfig.calendly.consultation,
    implementation: contactConfig.calendly.implementation,
    audit15min: contactConfig.calendly.audit15min,
    consult30min: contactConfig.calendly.consult30min
  };

  return (
    <a
      href={links[type] || contactConfig.calendly.discovery}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-calendly-link={type}
      data-gtm-trigger="calendly-booking"
      id={`calendly-${type}-link`}
    >
      {children}
    </a>
  );
}

// Component to display location
export function Location({ format = 'full' }) {
  const { city, state, full } = contactConfig.location;
  
  switch(format) {
    case 'city':
      return <span>{city}</span>;
    case 'state':
      return <span>{state}</span>;
    default:
      return <span>{full}</span>;
  }
}

// Anti-spam email display (not recommended - use contact form instead)
export function ProtectedEmail() {
  return (
    <div className="text-gray-600">
      <p>For security reasons, please use the contact form or booking links above.</p>
    </div>
  );
}