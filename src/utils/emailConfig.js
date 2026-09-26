// EmailJS Configuration
// You can either put credentials in .env or update them directly in this object
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fjrjgv9',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v9y6tzi',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qQMU5NbIClXCaZzmm',
};
