// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validateName = (name) => {
  if (!name) return 'Name is required';
  if (name.length < 2) return 'Name must be at least 2 characters';
  if (name.length > 50) return 'Name must be less than 50 characters';
  if (!/^[a-zA-Z\s'-]+$/.test(name)) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
  return '';
};

export const validateSubject = (subject) => {
  if (!subject) return 'Subject is required';
  if (subject.length < 5) return 'Subject must be at least 5 characters';
  if (subject.length > 100) return 'Subject must be less than 100 characters';
  return '';
};

export const validateMessage = (message) => {
  if (!message) return 'Message is required';
  if (message.length < 10) return 'Message must be at least 10 characters';
  if (message.length > 1000) return 'Message must be less than 1000 characters';
  return '';
};

export const validateForm = (formData) => {
  const errors = {
    name: validateName(formData.name),
    email: validateEmail(formData.email),
    subject: validateSubject(formData.subject),
    message: validateMessage(formData.message)
  };

  const isValid = Object.values(errors).every(error => error === '');
  
  return { errors, isValid };
};