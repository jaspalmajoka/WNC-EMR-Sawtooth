export const environment = {
  production: true,
  apiURL: 'http://localhost:8090',
  namespace: {
    '10': 'patient',
    '20': 'hospital',
    '30': 'user',
    '40': 'provider',
    '00': 'settings',
    '11': 'document',
    '22': 'appointment',
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.
