import { useEffect, useState } from 'react'
import './App.css'

//SLIDER CONTENIDO DESTACADO
const sliderItems = [
  {
    title: 'Para todxs',
    subtitle: 'Vistete a tu gusto, sin etiquetas ni límites',
    image: '/assets/images/clothes/lower/setmodel3_model.jpg',
    label: 'Street style'
  },
  {
    title: 'Look en pareja',
    subtitle: 'Oscuro, elegante y cómodo',
    image: '/assets/images/clothes/superior/setmodel2_model.jpg',
    label: 'Edición limitada'
  },
  {
    title: 'Essentials Indigo',
    subtitle: 'Corte perfecto para diario',
    image: '/assets/images/clothes/superior/setmodel_model.jpg',
    label: 'Último drop'
  }
]
// CATALOGO DE PRODUCTOS con filtros 
const catalogItems = [
  {
    id: 1,
    name: 'Sudadera essentials Negra',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/cone_front.jpg', //
    category: 'superiores', 
    images: ['/assets/images/clothes/superior/cone_front.jpg', '/assets/images/clothes/superior/cone_back.jpg']
  },
  {
    id: 2,
    name: 'Sudadera essentials Morada',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/setmodel_clothes.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/setmodel_clothes.jpg', '/assets/images/clothes/superior/setmodel_model.jpg']
  },
  {
    id: 3,
    name: 'Mezclilla Wings',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/wings_front.jpg',
    category: 'superior',
    images: ['/assets/images/clothes/superior/wings_front.jpg', '/assets/images/clothes/superior/wings_back.jpg']
  },
  {
    id: 4,
    name: 'Chamarra urbana Verde',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/green_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/green_front.jpg', '/assets/images/clothes/superior/green_back.jpg']
  },
  {
    id: 5,
    name: 'Camisa Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/setmodel2_clothes_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/setmodel2_clothes_front.jpg', '/assets/images/clothes/superior/setmodel2_clothes_zoom.jpg', '/assets/images/clothes/superior/setmodel2_model.jpg']
  },
  {
    id: 6,
    name: 'Playera azul urbana',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/blue_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/blue_front.jpg', '/assets/images/clothes/superior/blue_back.jpg']
  },
  {
    id: 7,
    name: 'Playera narjana Floral',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/orange_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/orange_front.jpg', '/assets/images/clothes/superior/orange_zoom.jpg']
  },
  {
    id: 8,
    name: 'Camisa rosa floral',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/flower_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/flower_front.jpg', '/assets/images/clothes/superior/flower_zoom.jpg']
  },
  {
    id: 9,
    name: 'Camisa rosa Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/pink_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/pink_front.jpg']
  },
  {
    id: 10,
    name: 'Sudadera gris urbana',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/sweter1.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/sweter1.jpg']
  },
  {
    id: 11,
    name: 'Camisa Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/black_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/black_front.jpg', '/assets/images/clothes/superior/black_back.jpg']
  },
  {
    id: 12,
    name: 'Chaqueta Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/superior/jacket_front.jpg',
    category: 'superiores',
    images: ['/assets/images/clothes/superior/jacket_front.jpg', '/assets/images/clothes/superior/jacket_back.jpg']
  },
  {
    id: 13,
    name: 'Pantalón Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lower1.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lower1.jpg']
  },
  {
    id: 14,
    name: 'Falda larga urbana',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lower2_front.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lower2_front.jpg', '/assets/images/clothes/lower/lower2_back.jpg']
  },
  {
    id: 15,
    name: 'Pantalón ancho Indigo',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lower3_front.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lower3_front.jpg', '/assets/images/clothes/lower/lower3_zoom.jpg']
  },
  {
    id: 16,
    name: 'Pantalón Hipie Indigo',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lower4.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lower4.jpg']
  },
  {
    id: 17,
    name: 'Pantalón multicolor',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lower5_front.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lower5_front.jpg', '/assets/images/clothes/lower/lower5_back.jpg']
  },
  {
    id: 18,
    name: 'Falda Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lower6.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lower6.jpg']
  },
  {
    id: 19,
    name: 'Pantalón sencillo Varios colores',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/lowercolor1.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/lowercolor1.jpg', '/assets/images/clothes/lower/lowercolor2.jpg', '/assets/images/clothes/lower/lowercolor3.jpg']
  },
  {
    id: 20,
    name: 'Falda cuadros urbana',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/lower/setmodel3_clothes.jpg',
    category: 'inferiores',
    images: ['/assets/images/clothes/lower/setmodel3_model.jpg', '/assets/images/clothes/lower/setmodel3_model2.jpg']
  },
  {
    id: 21,
    name: 'Vestido corto rojo',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/red_front.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/red_front.jpg', '/assets/images/clothes/set/red_zoom.jpg']
  },
  {
    id: 22,
    name: 'Set rojo 2 piezas',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set1_lower.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set1_lower.jpg', '/assets/images/clothes/set/set1_upper.jpg']
  },
  {
    id: 23,
    name: 'Traje Indigo Kiss',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set2_front.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set2_front.jpg', '/assets/images/clothes/set/set2_zoom.jpg']
  },
  {
    id: 24,
    name: 'Conjunto Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set3.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set3.jpg']
  },
  {
    id: 25,
    name: 'Traje gotico Indigo',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set4.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set4.jpg']
  },
  {
    id: 26,
    name: 'Verano 2 piezas',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set5_full.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set5_full.jpg', '/assets/images/clothes/set/set5_lower.jpg', '/assets/images/clothes/set/set5_upper.jpg']
  },
  {
    id: 27,
    name: 'Mono largo Indigo',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set6.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set6.jpg']
  },
  {
    id: 28,
    name: 'short y hoddie',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set7_front.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set7_front.jpg', '/assets/images/clothes/set/set7_zoom.jpg']
  },
  {
    id: 29,
    name: 'Minivestido gotico',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set8.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set8.jpg']
  },
  {
    id: 30,
    name: 'Conjunto 2 piezas negro',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set9_full.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set9_full.jpg', '/assets/images/clothes/set/set9_upper.jpg']
  },
  {
    id: 31,
    name: 'Mono verde Indigo essentials',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set10_full.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set10_full.jpg', '/assets/images/clothes/set/set10_zoom.jpg', '/assets/images/clothes/set/set10_back.jpg', '/assets/images/clothes/set/set10_backzoom.jpg']
  },
  {
    id: 32,
    name: 'Vestido negro brillante',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set11.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set11.jpg']
  },
  {
    id: 33,
    name: 'Vestido corto multicolor',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set12_front.jpg',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set12_front.jpg', '/assets/images/clothes/set/set12_back.jpg']
  },
  {
    id: 34,
    name: 'Vestido blanco Indigo',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set13_front.webp',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set13_front.webp', '/assets/images/clothes/set/set13_front2.webp']
  },
  {
    id: 35,
    name: 'Pantalón cargo negro',
    price: '$PREGUNTAR',
    image: '/assets/images/clothes/set/set14_front.webp',
    category: 'conjuntos',
    images: ['/assets/images/clothes/set/set14_front.webp', '/assets/images/clothes/set/set14_back.webp']
  }


  
  

  // Agrega más prendas aquí con sus categorías e imágenes
  // Ejemplo para 'conjuntos' (si tienes prendas de esta categoría):
  // {
  //   id: 5,
  //   name: 'Set Completo',
  //   price: '$2,499',
  //   image: '/assets/images/conjuntos/set1.jpg',
  //   category: 'conjuntos',
  //   images: ['/assets/images/conjuntos/set1.jpg', '/assets/images/conjuntos/set2.jpg']
  // }
]
//SIDEBAR
function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [slideIndex, setSlideIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isTabBarSticky, setIsTabBarSticky] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null) // Categoría seleccionada para filtrar (null = sin filtro)
  const [filteredItems, setFilteredItems] = useState(catalogItems) // Items filtrados (inicialmente todos)
  const [expandedImageIndex, setExpandedImageIndex] = useState(0) // Índice de imagen actual en vista expandida
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [showZoom, setShowZoom] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  
  // Splash screen - hide after 2 seconds
useEffect(() => {
  if (showSplash) {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000) // 2 segundos
    return () => clearTimeout(timer)
  }
}, [showSplash])


 // useEffect para actualizar filteredItems cuando cambia selectedCategory
  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(catalogItems.filter(item => item.category === selectedCategory))
    } else {
      setFilteredItems(catalogItems) // Sin filtro, muestra todos
    }
  }, [selectedCategory])

// useEffect para bloquear scroll cuando el modal de producto está abierto
useEffect(() => {
  if (selectedProduct) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return () => {
    document.body.style.overflow = 'auto'
  }
}, [selectedProduct])

  // Función para aplicar filtro (usada por "Confirmar")
  const applyFilter = () => {
    // Aquí podrías agregar lógica extra si "Confirmar" hace algo especial, pero por ahora solo asegura el filtro
    // (El filtro se aplica automáticamente al seleccionar categoría, pero este botón confirma)
  }

  // Función para restablecer filtro
  const resetFilter = () => {
    setSelectedCategory(null)
  }

  // Función para cambiar imagen en vista expandida
  const changeExpandedImage = (direction) => {
    const product = catalogItems.find(item => item.id === selectedProduct)
    if (product) {
      setExpandedImageIndex((current) => {
        if (direction === 'next') return (current + 1) % product.images.length
        if (direction === 'prev') return (current - 1 + product.images.length) % product.images.length
        return current
      })
    }
  }

  useEffect(() => {
  const handleScroll = () => {
    // Activa cuando el scroll supera 100px (ajusta este valor para que se active antes de tapar la tab bar)
    if (window.scrollY > 30) {
      setIsTabBarSticky(true)
    } else {
      setIsTabBarSticky(false)
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((current) => (current + 1) % sliderItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const changeSlide = (direction) => {
    setSlideIndex((current) => {
      if (direction === 'next') return (current + 1) % sliderItems.length
      if (direction === 'prev') return (current - 1 + sliderItems.length) % sliderItems.length
      return current
    })
  }

 // Splash screen
if (showSplash) {
  return (
    <div className="splash-screen">

      {/* VIDEO PC */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="splash-video-pc"
      >
        <source
          src="/assets/video/logo.mp4"
          type="video/mp4"
        />
      </video>

      {/* WEBM TRANSPARENTE MÓVIL */}
      <video
        autoPlay
        muted
        playsInline
        className="splash-video-mobile"
      >
        <source
          src="/assets/video/transparent-logo.webm"
          type="video/webm"
        />
      </video>

    </div>
  )
}

  return (
  <div className="app-layout">
    {/* Espacio izquierdo absoluto - vacío por ahora, para futuro contenido lateral */}
    <div className="left-space">
      {/* Aquí puedes agregar contenido futuro, como una sidebar fija o redes sociales */}
      {/* Por ejemplo, mover la sidebar aquí si quieres que sea parte del espacio fijo */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          ×
        </button>
        <div className="sidebar-logo">
          <img src="/assets/images/logo_white.png" alt="Logo Indigo Streetwear" />
        </div>
        <nav className="sidebar-menu">
          <button className="sidebar-link" onClick={() => { setActiveSection('home'); setSidebarOpen(false) }}>
            Inicio
          </button>
          <button className="sidebar-link" onClick={() => { setActiveSection('about'); setSidebarOpen(false) }}>
            Sobre Nosotros
          </button>
          <button className="sidebar-link" onClick={() => { setActiveSection('catalog'); setSidebarOpen(false) }}>
            Catálogo Completo
          </button>
        </nav>
      </aside>

        {/* contact widget */}
  <div className="contact-widget">
    <h3>Conecta con Indigo</h3>
    <p>Síguenos en nuestras redes sociales o contactanos para hacer tu pedido</p>

    <div className="contact-widget-icons">
      <a href="https://www.instagram.com/indigostreetwearmx/" target="_blank" rel="noopener noreferrer" className="contact-icon-item">
        <img src="/assets/images/icons/instagram.svg" alt="Instagram" />
        <span>Instagram</span>
      </a>
      <a href="https://www.facebook.com/INDIGOstreetwearMX/" target="_blank" rel="noopener noreferrer" className="contact-icon-item">
        <img src="/assets/images/icons/facebook.svg" alt="Facebook" />
        <span>Facebook</span>
      </a>
      <a href="tel:+521234567890" target="_blank" rel="noopener noreferrer" className="contact-icon-item">
        <img src="/assets/images/icons/whatsapp.svg" alt="Teléfono" />
        <span>WhatsApp</span>
      </a>
    </div>
  </div>

    </div>

    {/* Espacio central absoluto - todo el contenido actual */}
    <div className="center-space">
      {/* Fondo oscuro de apagado cuando la sidebar está abierta */}
      {sidebarOpen && <div className="backdrop" onClick={() => setSidebarOpen(false)} />}

      <div className="page-shell">
        {/* Barra superior */}
        <header className={`topbar ${isTabBarSticky ? 'sliding' : ''}`}>
  <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
    <img src="/assets/images/icons/bars.svg" alt="Menú" className="menu-icon" />
  </button>
  <div className="brand">
    <img src="/assets/images/logo_white.png" alt="Logo Indigo Streetwear" className="brand-logo" />
  </div>
</header>

        <main className="main-content">
          {/* Section selector */}
          <section className={`tab-bar ${isTabBarSticky ? 'sticky' : ''}`}>
  {isTabBarSticky ? (
    <>
      {/* Duplicado del botón de sidebar */}
      <button className="menu-toggle-sticky" onClick={() => setSidebarOpen(true)}>
        <img src="/assets/images/icons/bars.svg" alt="Menú" className="menu-icon" />
      </button>
      {/* Tab bar centrada */}
      <div className="tab-bar-center">
        <button className={`tab-button ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection('home')}>
          Inicio
        </button>
        <button className={`tab-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')}>
          Sobre Nosotros
        </button>
        <button className={`tab-button ${activeSection === 'catalog' ? 'active' : ''}`} onClick={() => setActiveSection('catalog')}>
          Catálogo Completo
        </button>
      </div>
      {/* Duplicado del logo */}
      <img src="/assets/images/logo_white.png" alt="Logo Indigo Streetwear" className="brand-logo-sticky" />
    </>
  ) : (
    <>
      {/* Tab bar normal cuando no es sticky */}
      <button className={`tab-button ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection('home')}>
        Inicio
      </button>
      <button className={`tab-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')}>
        Sobre Nosotros
      </button>
      <button className={`tab-button ${activeSection === 'catalog' ? 'active' : ''}`} onClick={() => setActiveSection('catalog')}>
        Catálogo Completo
      </button>
    </>
  )}
</section>

          {/* Contenido principal según la sección activa */}
          <section className="content-area">
            {activeSection === 'home' && (
              <>
                <section className="hero-section">
                  <div className="hero-copy">
                    <span className="eyebrow">Indigo Streetwear</span>
                    <h1>Nuevos lanzamientos en ropa urbana</h1>
                    <p>
                      Minimalismo oscuro, piezas premium y estilo con actitud. Explora nuestra colección más reciente.
                    </p>
                  </div>

                  <div className="hero-slider">
                    <img
                      src={sliderItems[slideIndex].image}
                      alt={sliderItems[slideIndex].title}
                      className="slider-image"
                    />
                    <div className="slider-info">
                      <p className="slider-label">{sliderItems[slideIndex].label}</p>
                      <h2>{sliderItems[slideIndex].title}</h2>
                      <p>{sliderItems[slideIndex].subtitle}</p>
                    </div>
                    <div className="slider-controls">
                      <button onClick={() => changeSlide('prev')} className="slider-arrow">
                        ‹
                      </button>
                      <button onClick={() => changeSlide('next')} className="slider-arrow">
                        ›
                      </button>
                    </div>
                  </div>
                </section>
                {/* Sección de la historia de la marca */}
                <section className="brand-story-section">
  <div className="brand-story-header">
    <span className="eyebrow">Conoce la marca</span>
    <h2>De dónde viene Indigo Streetwear</h2>
    <p>
      Descubre los materiales, la producción y el lugar donde nace nuestra ropa urbana.
    </p>
  </div>

  {/* Nuevo contenedor para las tarjetas con gap */}
  <div className="brand-story-list">
    <div className="brand-story-card">
      {/* Contenido de la primera tarjeta */}
      <div className="brand-story-copy">
        <span className="eyebrow">Materiales premium</span>
        <h3>Tejidos con propósito</h3>
        <p>
          Algodón orgánico, mezcla stretch y acabados pensados para durar. Cada prenda se fabrica con
          conciencia de calidad para que se vea bien siempre.
        </p>
      </div>
      <div className="brand-story-image">
        <img src="/assets/images/texture.jpg" alt="Materiales premium" />
      </div>
    </div>

    <div className="brand-story-card">
      {/* Contenido de la segunda tarjeta */}
      <div className="brand-story-copy">
        <span className="eyebrow">Origen de la tela</span>
        <h3>Proveedores responsables</h3>
        <p>
          Las telas provienen de productores nacionales que cumplen con controles de calidad y
          producción responsable.
        </p>
      </div>
      <div className="brand-story-image">
        <img src="/assets/images/origin2.jpg" alt="Origen de la tela" />
      </div>
    </div>

    <div className="brand-story-card">
      {/* Contenido de la tercera tarjeta */}
      <div className="brand-story-copy">
        <span className="eyebrow">Tiempo de producción</span>
        <h3>Cuidado en cada paso</h3>
        <p>
          Cada pieza pasa por diseño, corte y revisión. El resultado es una prenda limpia, bien hecha
          y lista para el uso diario.
        </p>
      </div>
      <div className="brand-story-image">
        <img src="/assets/images/process.jpg" alt="Tiempo de producción" />
      </div>
    </div>

    <div className="brand-story-card">
      {/* Contenido de la cuarta tarjeta */}
      <div className="brand-story-copy">
        <span className="eyebrow">Ubicación</span>
        <h3>Desde México</h3>
        <p>
          Estamos basados en México, apoyando talento local y fabricación cercana para un streetwear
          auténtico.
        </p>
      </div>
      <div className="brand-story-image">
        <img src="/assets/images/cdmx.png" alt="Ubicación" />
      </div>
    </div>
  </div>
</section>
              </>
            )}

            {activeSection === 'about' && (
              <section className="about-section">
                <div className="about-card">
                  <h2>Sobre Nosotros</h2>
                  <p>
                    Indigo Streetwear nace de la idea de crear prendas urbanas con identidad propia. 
                    Combinamos comodidad, diseño contemporáneo y una estética oscura o colorida inspirada en la cultura streetwear actual.
                  </p>
                  <div className="about-details">
                    <div>
                      <h3>Misión</h3>
                      <p>Diseñar prendas que transmitan personalidad, comodidad y autenticidad en cada detalle.</p>
                    </div>
                    <div>
                      <h3>Visión</h3>
                      <p>Convertirnos en una marca reconocida por ofrecer streetwear auténtico, moderno y accesible para quienes buscan expresar su estilo propio.</p>
                    </div>
                    
                  </div>
                </div>
                <div className="about-community">
                      <h3>Únete a nuestra comunidad</h3>

                      <div className="about-community-icons">
                        <a
                          href="https://www.instagram.com/indigostreetwearmx/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/assets/images/icons/instagram.svg" alt="Instagram" />
                        </a>

                        <a
                          href="https://www.facebook.com/INDIGOstreetwearMX/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/assets/images/icons/facebook.svg" alt="Facebook" />
                       </a>

                        <a
                          href="https://wa.me/521234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/assets/images/icons/whatsapp.svg" alt="WhatsApp" />
                        </a>
                      </div>
                    </div>
              </section>
            )}


{/* MOBILE BOTTOM NAVBAR */}
<div className="mobile-navbar">

  <button
    className={`mobile-nav-btn ${activeSection === 'home' ? 'active' : ''}`}
    onClick={() => setActiveSection('home')}
  >
    <img src="/assets/images/icons/home.svg" alt="Inicio" />
  </button>

  <button
    className={`mobile-nav-btn ${activeSection === 'about' ? 'active' : ''}`}
    onClick={() => setActiveSection('about')}
  >
    <img src="/assets/images/icons/indigo.svg" alt="Sobre Nosotros" />
  </button>

  <button
    className={`mobile-nav-btn ${activeSection === 'catalog' ? 'active' : ''}`}
    onClick={() => setActiveSection('catalog')}
  >
    <img src="/assets/images/icons/shop.svg" alt="Catálogo" />
  </button>

</div>            


{/* ========== MODAL DE PRODUCTO EXPANDIDO - TIPO INSTAGRAM ========== */}
{activeSection === 'catalog' && (
  <section className={`catalog-section fade-in`}>
    <h2>Catálogo Completo</h2>
    <p className="catalog-description">
      Explora cada prenda para ver más fotografías, tallas disponibles y detalles del diseño.
    </p>

    {/* Grid de productos - usando filteredItems */}
    <div className="catalog-grid">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="catalog-card"
          onClick={() => {
            setSelectedProduct(item.id)
            setExpandedImageIndex(0) // Reinicia al índice 0 al abrir
          }}
        >
          <img src={item.image} alt={item.name} />
          <div className="catalog-card-body">
            <span>{item.name}</span>
            <strong>{item.price}</strong>
          </div>
        </div>
      ))}
    </div>
  </section>
)}
{selectedProduct && (() => {
  const product = catalogItems.find(item => item.id === selectedProduct)
  if (!product) return null

  return (
    <div className="product-modal" onClick={() => setSelectedProduct(null)}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedProduct(null)}>
          <img src="/assets/images/icons/cross.svg" alt="Cerrar" />
        </button>
        {/* LADO IZQUIERDO - IMÁGENES */}
        <div className="modal-left">
          {/* Imagen principal con efecto zoom */}
          <div 
            className="modal-main-image"
            onMouseMove={(e) => {
  if (window.innerWidth <= 768) return

  const rect = e.currentTarget.getBoundingClientRect()

  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

  setZoomPosition({ x, y })

  setMousePosition({
    x: e.clientX,
    y: e.clientY,
  })

            setShowZoom(true)
          }}
            onMouseLeave={() => setShowZoom(false)}
          >
            <img 
              src={product.images[expandedImageIndex]} 
              alt={product.name} 
              className="main-image"
            />
            
            {/* Recuadro de zoom dinámico junto al cursor */}
            {showZoom && (
              <div 
                className="zoom-viewer"
                style={{
                  left: `${mousePosition.x + 10}px`,
                  top: `${mousePosition.y + 10}px`,
                }}
              >
                <div 
                  className="zoom-content"
                  style={{
                    backgroundImage: `url('${product.images[expandedImageIndex]}')`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Thumbnails de imágenes */}
          {product.images.length > 1 && (
            <div className="modal-thumbnails">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Foto ${idx + 1}`}
                  className={`thumbnail ${expandedImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setExpandedImageIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* LADO DERECHO - INFORMACIÓN */}
        <div className="modal-right">
          {/* Botón cerrar */}


          {/* Info del producto */}
          <h2 className="modal-product-name">{product.name}</h2>
          <p className="modal-product-price">{product.price}</p>

          {/* Descripción */}
          <p className="modal-description">
            Prenda de alta calidad, diseño único y confección artesanal.
          </p>

          {/* Tallas disponibles */}
          <div className="modal-sizes">
            <h4>Tallas disponibles</h4>
            <div className="size-buttons">
              <button className="size-btn">XS</button>
              <button className="size-btn active">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">XXL</button>
            </div>
          </div>

          {/* Botón comprar - va a Instagram */}
          <a 
            href="https://www.instagram.com/indigostreetwearmx/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="modal-buy-button"
          >
            Comprar en Instagram
          </a>

          {/* Info adicional */}
          <div className="modal-info">
            <p>📦 Envío disponible a todo México</p>
            <p>💳 Pregunta disponibilidad y métodos de pago en Instagram</p>
          </div>
        </div>
      </div>
    </div>
  )
})()}


          </section>
          
        </main>
      </div>
    </div>
    
    
<div className="right-space">
  {/* Espacio derecho absoluto - filtro del catálogo */}
  {activeSection === 'catalog' && (
    <div className="catalog-filter">
      <h3>Filtros</h3>
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${selectedCategory === 'inferiores' ? 'active' : ''}`} 
          onClick={() => setSelectedCategory('inferiores')}
        >
          Inferiores
        </button>
        <button 
          className={`filter-btn ${selectedCategory === 'superiores' ? 'active' : ''}`} 
          onClick={() => setSelectedCategory('superiores')}
        >
          Superiores
        </button>
        <button 
          className={`filter-btn ${selectedCategory === 'conjuntos' ? 'active' : ''}`} 
          onClick={() => setSelectedCategory('conjuntos')}
        >
          Conjuntos
        </button>
      </div>
      <div className="filter-actions">
        <button className="reset-btn" onClick={resetFilter}>Restablecer</button>
        <button className="confirm-btn" onClick={applyFilter}>Confirmar</button>
      </div>
    </div>
  )}
</div>
  </div>
)
}

export default App