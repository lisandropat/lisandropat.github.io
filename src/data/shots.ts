import type { ImageMetadata } from 'astro';

import shot01 from '../assets/shots/Shot-01.jpg';
import shot02 from '../assets/shots/Shot-02.jpg';
import shot03 from '../assets/shots/Shot-03.jpg';
import shot04 from '../assets/shots/Shot-04.jpg';
import shot05 from '../assets/shots/Shot-05.jpg';
import shot06 from '../assets/shots/Shot-06.jpg';
import shot07 from '../assets/shots/Shot-07.jpg';
import shot12 from '../assets/shots/Shot-12.jpg';
import shot13 from '../assets/shots/Shot-13.jpg';

// Estos tres estaban en assets/shots/ pero no aparecían en el HTML.
// Los copié al proyecto igual; descomentá los que quieras mostrar
// (y borrá los archivos de los que no).
// import shot09 from '../assets/shots/Shot-09.jpg';
// import shot10 from '../assets/shots/Shot-10.jpg';
// import shot11 from '../assets/shots/Shot-11.jpg';

export type Shot = {
  image: ImageMetadata;
  caption: string;
};

export const shots: Shot[] = [
  { image: shot01, caption: 'AR integration to renting app' },
  { image: shot02, caption: 'Renting app concept' },
  { image: shot03, caption: 'Eco-friendly bottles product page' },
  { image: shot04, caption: 'Car renting homepage' },
  { image: shot05, caption: 'Hasselblad homepage proposal' },
  { image: shot06, caption: 'Rental/Resale B2B homepage' },
  { image: shot07, caption: 'Rehearsal Room renting map' },
  { image: shot12, caption: 'Rehearsal Room administration web app' },
  { image: shot13, caption: 'Responsive adaptation for dashboard' },
];
