// Define the base URL for your production site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pensiuneavilcan.ro';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Pensiunea Vilcan - Cazare de Lux în Toplița',
  description: 'Descoperiți confortul și luxul într-o locație pitorească din Sarmaş, aproape de Toplița. Camere elegante, facilități moderne și experiențe memorabile.',
  openGraph: {
    title: 'Pensiunea Vilcan - Cazare de Lux în Sarmaş',
    description: 'Cazare premium în Harghita, aproape de Toplița, cu facilități moderne, activități turistice și peisaje deosebite.',
    type: 'website',
    locale: 'ro_RO',
    url: baseUrl,
  },
};
