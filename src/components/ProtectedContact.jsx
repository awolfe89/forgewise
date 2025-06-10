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
      <span>Site emergency? Text me RIGHT NOW: </span>
      <ProtectedPhone type="link" />
    </div>
  );
}

// Component for Calendly links
export function BookingLink({ type = 'audit15min', className = '', children }) {
  const links = {
    emergency: contactConfig.calendly.emergency,
    audit15min: contactConfig.calendly.audit15min,
    consult30min: contactConfig.calendly.consult30min
  };
  
  return (
    <a
      href={links[type]}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
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