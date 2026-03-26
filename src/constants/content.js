export const NAV_LINKS = [
  { label: '¿Cómo funciona?', href: '#como-funciona' },
  { label: 'Vehículos', href: '#vehiculos' },
  { label: 'Conductores', href: '#conductores' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO_CONTENT = {
  badge: '🏍️ App de transporte para Urabá',
  title: {
    line1: 'Tu viaje en ',
    moto: 'moto',
    conjunction: ' o ',
    chivita: 'chivita,',
    line2: 'en segundos.',
  },
  subtitle:
    'Pa\' Donde conecta pasajeros con conductores de moto y chivita en Arboletes y el Urabá. Rápido, seguro y hecho para nuestra gente.',
  socialProof: 'Más de 500 personas esperando el lanzamiento',
  floatingCards: [
    { emoji: '🏍️', text: 'Moto — $3.500 COP', position: 'top-right' },
    { emoji: '⭐', text: '4.9 Calificación', position: 'bottom-left' },
    { emoji: '📍', text: 'Arboletes', position: 'top-left' },
  ],
};

export const HOW_IT_WORKS = {
  badge: '¿Cómo funciona?',
  title: 'Pedir un viaje es facilísimo',
  subtitle: 'Solo tres pasos para llegar a tu destino en Arboletes.',
  steps: [
    {
      number: '1',
      icon: '📱',
      title: 'Abre la app',
      description:
        'Descarga Pa\' Donde y permite el acceso a tu ubicación en Arboletes.',
    },
    {
      number: '2',
      icon: '📍',
      title: 'Elige tu destino',
      description:
        'Selecciona a dónde vas — el Volcán, la playa, el parque o donde quieras.',
    },
    {
      number: '3',
      icon: '🛵',
      title: '¡A rodar!',
      description:
        'Un conductor cercano acepta tu viaje. Monitorea su llegada en tiempo real.',
    },
  ],
};

export const VEHICLES = [
  {
    type: 'Moto',
    emoji: '🏍️',
    theme: 'blue',
    tagline: '1 pasajero · Más rápida · Más económica',
    features: [
      'Llegada en menos de 5 minutos',
      'Ideal para viajes rápidos',
      'Casco incluido siempre',
      'Seguimiento en tiempo real',
    ],
    price: 'Desde $3.500 COP',
  },
  {
    type: 'Chivita',
    emoji: '🛺',
    theme: 'green',
    tagline: 'Hasta 3 pasajeros · Más espacio · Ideal para familias',
    features: [
      'Espacio para equipaje',
      'Perfecto para familias',
      'Techado y cómodo',
      'Apto para recorridos largos',
    ],
    price: 'Desde $4.000 COP',
  },
];

export const VISION = {
  label: 'NUESTRA MISIÓN',
  statement:
    'Digitalizar el transporte informal del Urabá para convertirlo en dignidad para el conductor y confianza para el pasajero.',
  highlights: [
    {
      emoji: '💰',
      title: 'Comisión justa del 10%',
      description: 'El conductor se queda con el 90% de cada viaje.',
    },
    {
      emoji: '📱',
      title: 'Tecnología accesible',
      description: 'Simple, en español y pensada para nuestra gente.',
    },
    {
      emoji: '🤝',
      title: 'Hecha para el Urabá',
      description: 'Nacimos en Arboletes y crecemos con nuestra región.',
    },
  ],
};

export const PLACES = {
  title: 'Llega a los mejores lugares de Arboletes',
  items: [
    { emoji: '🌋', name: 'Volcán de Lodo', description: 'Atracción natural única en el mundo', tag: 'Turismo' },
    { emoji: '🏖️', name: 'Playa Principal', description: 'El corazón costero de Arboletes', tag: 'Playa' },
    { emoji: '⚓', name: 'Muelle Turístico', description: 'Punto de partida para aventuras marinas', tag: 'Turismo' },
    { emoji: '🏛️', name: 'Parque Principal', description: 'Centro de la vida social y cultural', tag: 'Centro' },
    { emoji: '🛒', name: 'Plaza de Mercado', description: 'Frutas frescas y sabor local', tag: 'Comercio' },
    { emoji: '🏥', name: 'Hospital Municipal', description: 'Atención médica para toda la comunidad', tag: 'Salud' },
  ],
};

export const DRIVERS = {
  badge: '¿Tienes moto o chivita?',
  title: 'Conduce con Pa\' Donde',
  subtitle: 'Únete a la primera plataforma de transporte hecha para el Urabá.',
  benefits: [
    { emoji: '💰', text: 'Solo 10% de comisión' },
    { emoji: '🕐', text: 'Tú decides cuándo trabajar' },
    { emoji: '🤝', text: 'Somos de aquí, para los nuestros' },
  ],
  cities: ['Arboletes', 'Necoclí', 'San Juan de Urabá', 'Turbo', 'Apartadó'],
  whatsappNumber: '573001234567',
  whatsappMessage: 'Hola, quiero ser conductor en Pa\' Donde 🏍️',
};

export const FAQ_ITEMS = [
  {
    question: '¿Cómo pago el viaje?',
    answer:
      'Actualmente los pagos se realizan en efectivo directamente al conductor. Estamos trabajando en integrar pagos digitales como Nequi y Bancolombia para mayor comodidad.',
  },
  {
    question: '¿Es seguro usar Pa\' Donde?',
    answer:
      'Sí. Todos los conductores son verificados con documento de identidad, licencia de conducción y seguro obligatorio. Además, puedes compartir tu viaje en tiempo real con tus contactos de confianza.',
  },
  {
    question: '¿En qué ciudades funciona?',
    answer:
      'Estamos lanzando en Arboletes, Antioquia. Próximamente nos expandiremos a Necoclí, San Juan de Urabá, Turbo y otros municipios del Urabá.',
  },
  {
    question: '¿Cómo se calcula la tarifa?',
    answer:
      'La tarifa se basa en la distancia del recorrido. Antes de confirmar tu viaje, siempre verás el precio estimado. Sin sorpresas.',
  },
  {
    question: '¿Puedo cancelar un viaje?',
    answer:
      'Sí, puedes cancelar un viaje antes de que el conductor llegue a recogerte. Si cancelas frecuentemente, podrías recibir un aviso.',
  },
  {
    question: '¿Qué pasa si tengo un problema?',
    answer:
      'Puedes contactarnos directamente por WhatsApp o a través del soporte dentro de la app. Estamos aquí para ayudarte.',
  },
];

export const DOWNLOAD = {
  title: 'Descarga Pa\' Donde',
  titleLine2: 'y empieza a moverte',
  subtitle: 'Gratis, rápido y hecho para Arboletes. Disponible en Android.',
  whatsappText: 'Escríbenos por WhatsApp',
};

export const FOOTER = {
  tagline: 'Tu destino, a un toque.',
  email: 'hola@padonde.co',
  links: [
    { label: 'Términos', href: '#' },
    { label: 'Privacidad', href: '#' },
    { label: 'Datos', href: '#' },
    { label: 'Soporte', href: '#' },
  ],
  copyright: '© 2026 Pa\' Donde · Arboletes, Antioquia · Colombia',
  socials: [
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'Facebook', href: '#' },
  ],
};
