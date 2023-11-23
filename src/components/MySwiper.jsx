import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageSlider({name, posts}) {
  const allprops =  [
{
frontmatter: {
  title: 'Barrio Walsh',
  ubicacion: 'González Catán',
  imagenes: [ 'Barrio_Walsh.jpeg', 'Barrio_Walsh2.jpg', 'Barrio_Walsh3.jpg' ],
  order: 1,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Barrio_Walsh'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Barrio_Walsh.md',
url: '/projects/Barrio_Walsh',
__esModule: true,
},
{
frontmatter: {
  title: 'Edificio de Oficinas Polo Este',
  ubicacion: 'Moron',
  imagenes: [ 'Edificio_de_Oficinas_Polo_Este.jpg' ],
  order: 8,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Edificio_de_Oficinas_Polo_Este'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Edificio_de_Oficinas_Polo_Este.md',
url: '/projects/Edificio_de_Oficinas_Polo_Este',
__esModule: true,
},
{
frontmatter: {
  title: 'JARDIN_903_VIVORATA',
  ubicacion: 'Moron',
  imagenes: [
    'JARDIN(3).jpeg', 'JARDIN(5).jpeg', 'JARDIN(10).jpeg', 'JARDIN(11).jpeg',
    'JARDIN(13).jpeg', 'JARDIN(14).jpeg', 'JARDIN(15).jpeg'
  ],
  order: 2,
  layout: '../../Layout/ProjectPost.astro',
  name: 'JARDIN_903_VIVORATA'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/JARDIN_903_VIVORATA.md',
url: '/projects/JARDIN_903_VIVORATA',
__esModule: true,
},
{
frontmatter: {
  title: 'Nodo Sanitario',
  ubicacion: 'Navarro',
  imagenes: [ 'estudio.jpeg' ],
  order: 7,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Nodo_Sanitario'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Nodo_Sanitario.md',
url: '/projects/Nodo_Sanitario',
__esModule: true,},
{
frontmatter: {
  title: 'Parque Solar Fotovoltaico',
  ubicacion: 'El Dorado',
  imagenes: [ 'parque_solar_fotovoltaico.jpg' ],
  order: 4,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Parque_Solar_Fotovoltaico'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Parque_Solar_Fotovoltaico.md',
url: '/projects/Parque_Solar_Fotovoltaico',
__esModule: true,
},
{
frontmatter: {
  title: 'Plaza: juegos, mastil y mesas',
  ubicacion: '...',
  imagenes: [ 'primavera1_1.jpeg' ],
  order: 5,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Primavera_1'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Primavera_1.md',
url: '/projects/Primavera_1',
__esModule: true,
},
{
frontmatter: {
  title: 'Terminación de 77 viviendas',
  ubicacion: 'Santos Vega',
  imagenes: [ 'santosvega.gif' ],
  order: 6,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Santos_Vega'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Santos_Vega.md',
url: '/projects/Santos_Vega',
__esModule: true,
},
{
frontmatter: {
  title: 'Soldado Argentino',
  ubicacion: 'Ituzaingó',
  imagenes: [ 'Soldado_Argentino.jpg' ],
  order: 3,
  layout: '../../Layout/ProjectPost.astro',
  name: 'Soldado_Argentino'
},
file: 
  'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Soldado_Argentino.md',
url: '/projects/Soldado_Argentino',
__esModule: true,
}
]
console.log(allprops)
  const props = allprops.find(prop => prop.frontmatter.name === name);
  console.log(props)
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.frontmatter.imagenes.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="p-2 mx-auto my-auto h-96 object-cover max-w-full "
              src={`/projects/${props.frontmatter.name}/${image}`}
              alt={`Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
