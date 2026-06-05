import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Header, Hero, CollectionCard, Footer, Lightbox } from './components/Layout';
import { cn } from './lib/utils';

const cortanaGlob = (import.meta as any).glob('../public/collections/Cortana/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });
const cortanaImages = Object.keys(cortanaGlob).map(path => path.replace('../public', ''));

const collections = [
  {
    id: "sensorial",
    title: "ENTRAMADOS MBF",
    year: "SS26",
    images: [
          "/collections/img1.jpg",
          "/collections/Entramados/IMG_PCS_1.jpg",
          "/collections/Entramados/IMG_PCS_2.jpg",
          "/collections/Entramados/IMG_PCS_3.jpg",
          "/collections/Entramados/IMG_PCS_4.jpg",
          "/collections/Entramados/IMG_PCS_5.jpg",
          "/collections/Entramados/IMG_PCS_6.jpg",
          "/collections/Entramados/IMG_PCS_7.jpg",
          "/collections/Entramados/IMG_PCS_8.jpg",
          "/collections/Entramados/IMG_PCS_9.jpg",
          "/collections/Entramados/IMG_PCS_11.jpg",
          "/collections/Entramados/IMG_PCS_12.jpg",
          "/collections/Entramados/IMG_PCS_13.jpg",
          "/collections/Entramados/IMG_PCS_14.jpg",
          "/collections/Entramados/IMG_PCS_15.jpg",
          "/collections/Entramados/IMG_PCS_16.jpg",
          "/collections/Entramados/IMG_PCS_17.jpg",
          "/collections/Entramados/IMG_PCS_18.jpg",
          "/collections/Entramados/IMG_PCS_19.jpg",
          "/collections/Entramados/IMG_PCS_20.jpg",
          "/collections/Entramados/IMG_PCS_21.jpg",
          "/collections/Entramados/IMG_PCS_22.jpg",
          "/collections/Entramados/IMG_PCS_23.jpg",
          "/collections/Entramados/IMG_PCS_24.jpg",
          "/collections/Entramados/IMG_PCS_25.jpg",
          "/collections/Entramados/IMG_PCS_26.jpg",
          "/collections/Entramados/IMG_PCS_27.jpg",
          "/collections/Entramados/IMG_PCS_28.jpg",
          "/collections/Entramados/IMG_PCS_29.jpg",
          "/collections/Entramados/IMG_PCS_30.jpg",
          "/collections/Entramados/IMG_PCS_31.jpg",
    ]
  },
  {
    id: "ephemeral",
    title: "COMO DOS GOTAS",
    year: "2026",
    images: [
      "/collections/img22.jpg",
      "/collections/Cortana/IMG_PCS_1.jpg",
      "/collections/Cortana/IMG_PCS_2.jpg",
      "/collections/Cortana/IMG_PCS_3.jpg",
      "/collections/Cortana/IMG_PCS_4.jpg",
      "/collections/Cortana/IMG_PCS_5.jpg",
      "/collections/Cortana/IMG_PCS_6.jpg",
      "/collections/Cortana/IMG_PCS_7.jpg",
      "/collections/Cortana/IMG_PCS_8.jpg",
      "/collections/Cortana/IMG_PCS_9.jpg",
      "/collections/Cortana/IMG_PCS_10.jpg",
      "/collections/Cortana/IMG_PCS_11.jpg",
      "/collections/Cortana/IMG_PCS_12.jpg",
      "/collections/Cortana/IMG_PCS_13.jpg",
      "/collections/Cortana/IMG_PCS_14.jpg",
      "/collections/Cortana/IMG_PCS_15.jpg",
      "/collections/Cortana/IMG_PCS_16.jpg",
      "/collections/Cortana/IMG_PCS_17.jpg"
      
    ]
  },
  {
    id: "organic",
    title: "DISEÑAR ES VOLVER AL ORIGEN",
    year: "2026",
    images: [
      "/collections/imgc4.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_1.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_2.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_3.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_4.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_5.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_6.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_7.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_8.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_9.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_10.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_11.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_12.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_13.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_14.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_15.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_16.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_17.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_18.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_19.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_20.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_21.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_22.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_23.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_24.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_25.jpg",
        "/collections/Diseñar_es_volver_al_origen/IMG_PCS_26.jpg"
    ]
  }
];

const processes = [
  {
    title: "Draping & Form",
    description: "Exploring the dialogue between fabric and gravity through manual manipulation.",
    image: "/philosophy/proc1.jpg"
  },
  {
    title: "Textile Research",
    description: "Developing sustainable textures using natural fibers and artisanal dyeing techniques.",
    image: "/philosophy/proc2.jpg"
  }
];

import { Language, translations } from './i18n';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [lang, setLang] = React.useState<Language>('es');
  const [view, setView] = React.useState<'home' | 'philosophy' | 'upcycling' | 'collection' | 'contact'>('home');
  const activeCollectionRef = React.useRef<typeof collections[0] | null>(null);
  const [activeCollection, setActiveCollection] = React.useState<typeof collections[0] | null>(null);
  const [layoutMode, setLayoutMode] = React.useState<'editorial' | 'grid'>('editorial');
  
  // Formspree state
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [failedImages, setFailedImages] = React.useState<Record<string, boolean>>({});
  
  const t = translations[lang];

  const renderItalic = (text: string) => {
    return text.split('*').map((part, i) => (
      i % 2 === 1 ? <span key={i} className="font-serif italic">{part}</span> : part
    ));
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const navigateToPhilosophy = () => {
    setView('philosophy');
    window.scrollTo(0, 0);
  };

  const navigateToUpcycling = () => {
    setView('upcycling');
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    setView('contact');
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Reemplaza "mdayyzdl" con el ID que te de Formspree
      const response = await fetch('https://formspree.io/f/mdayyzdl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const navigateToCollection = (col: typeof collections[0]) => {
    setActiveCollection(col);
    setView('collection');
    window.scrollTo(0, 0);
  };

  if (view === 'upcycling') {
    return (
      <div className="min-h-screen bg-brand-beige">
        <Header lang={lang} setLang={setLang} setView={setView} isSubpage={true} />
        <main className="pt-32">
          <section className="py-20 px-6 md:px-12 bg-white text-brand-dark">
            <div className="max-w-3xl mx-auto text-center">
              <button 
                onClick={navigateToHome}
                className="mb-12 text-[15px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 mx-auto"
              >
                <ChevronLeft size={14} /> {lang === 'es' ? 'Volver' : 'Back'}
              </button>
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-[17.6px] md:text-[30.4px] mb-8 font-sans font-light uppercase tracking-[0.14em]">
                    {lang === 'es' ? 'La Filosofía del Upcycling' : 'The Philosophy of Upcycling'}
                  </h3>
                  <p className="text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] whitespace-pre-line text-justify">
                    {lang === 'es' 
                      ? `El upcycling forma parte del proceso de creación de la colección a través de tejidos que la propia clienta puede aportar, como mantelerías, sábanas, visillos o encajes familiares. Estos materiales se valoran previamente para estudiar si pueden integrarse directamente en la prenda o si es necesario reinterpretarlos mediante otro tejido que conserve su esencia.

                      Aparte de un recurso decorativo, estos elementos introducen una memoria personal dentro del vestido. De esta forma, la prenda no parte únicamente de un diseño, sino también de una historia previa que se transforma y continúa en un nuevo contexto. Incorporar estos tejidos permite mantener y reforzar el valor sentimental de la prenda, creando un vínculo emocional más profundo entre la novia, su historia familiar y el vestido que la acompañará en un momento tan significativo.`
                      : `Upcycling is an integral part of the collection's creation process, utilizing fabrics that the client herself can provide, such as tablecloths, sheets, curtains, or family heirloom lace. These materials are assessed beforehand to determine if they can be directly integrated into the garment or if they need to be reinterpreted using a different fabric that retains their essence.

                        Beyond being a decorative element, these fabrics introduce a personal history into the dress. In this way, the garment is not only based on a design but also on a past story that is transformed and continues in a new context. Incorporating these fabrics allows the sentimental value of the garment to be maintained and reinforced, creating a deeper emotional connection between the bride, her family history, and the dress that will accompany her on such a significant occasion.`
                    }
                  </p>
                </motion.div>
              </div>

              <div className="mt-32 w-screen relative left-1/2 -translate-x-1/2 max-w-[100vw] px-0">
                <div className="h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden w-full">
                  <img 
                    src="/collections/img32.jpg" 
                    alt="Upcycling Footer" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  if (view === 'philosophy') {
    return (
      <div className="min-h-screen bg-brand-beige">
        <Header lang={lang} setLang={setLang} setView={setView} isSubpage={true} />
        <main className="pt-32">
          <section className="py-20 px-6 md:px-12 bg-white text-brand-dark">
            <div className="max-w-3xl mx-auto text-center">
              <button 
                onClick={navigateToHome}
                className="mb-12 text-[15px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 mx-auto"
              >
                <ChevronLeft size={14} /> {lang === 'es' ? 'Volver' : 'Back'}
              </button>
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-[17.6px] md:text-[30.4px] mb-8 font-sans font-light uppercase tracking-[0.14em]">{(t as any).philosophy.manifesto.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] whitespace-pre-line text-justify">
                    {(t as any).philosophy.manifesto.content}
                  </p>
                </motion.div>

                <div className="w-full h-[1px] bg-brand-dark/10" />

                 <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-[17.6px] md:text-[30.4px] mb-8 font-sans font-light uppercase tracking-[0.14em]">{(t as any).philosophy.mission.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] whitespace-pre-line text-justify">
                    {(t as any).philosophy.mission.content}
                  </p>
                </motion.div>

                <div className="w-full h-[1px] bg-brand-dark/10" />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-[17.6px] md:text-[30.4px] mb-8 font-sans font-light uppercase tracking-[0.14em]">{(t as any).philosophy.vision.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] whitespace-pre-line text-justify">
                    {(t as any).philosophy.vision.content}
                  </p>
                </motion.div>
              </div>

              <div className="mt-32">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/collections/IMG_52.jpg" 
                    alt="Philosophy Footer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  if (view === 'collection' && activeCollection) {
    const availableImages = activeCollection.images;
    const loadedImages = activeCollection.images.filter(img => !failedImages[img]);

    const handleNextImage = () => {
      if (!selectedImage || loadedImages.length === 0) return;
      const currentIndex = loadedImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % loadedImages.length;
      setSelectedImage(loadedImages[nextIndex]);
    };

    const handlePrevImage = () => {
      if (!selectedImage || loadedImages.length === 0) return;
      const currentIndex = loadedImages.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + loadedImages.length) % loadedImages.length;
      setSelectedImage(loadedImages[prevIndex]);
    };

    const layoutLabels = {
      es: {
        editorial: 'Editorial',
        grid: 'Mansory'
      },
      en: {
        editorial: 'Editorial',
        grid: 'Mansory'
      }
    };

    return (
      <div className="min-h-screen bg-brand-beige">
        <Header lang={lang} setLang={setLang} setView={setView} isSubpage={true} />
        <main className="pt-32">
          <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={navigateToHome}
                className="mb-12 text-[15px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
              >
                <ChevronLeft size={14} /> {lang === 'es' ? 'Volver' : 'Back'}
              </button>
              
              <div className="mb-12">
                <span className="text-[12px] font-sans font-light uppercase tracking-[0.14em] text-brand-muted mb-4 block">{activeCollection.year}</span>
                <h2 className="text-[17.6px] md:text-[30.4px] mb-8 font-sans font-light uppercase tracking-[0.14em]">{activeCollection.title}</h2>
                <p className="text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] whitespace-pre-line text-justify">
                  {(t.collections as any).items[activeCollection.id as any]}
                </p>
              </div>

              {/* Layout Switcher */}
              <div className="flex gap-x-8 mb-12 border-b border-brand-dark/10 pb-6 text-[12px] uppercase tracking-[0.2em] text-brand-muted">
                <button 
                  onClick={() => setLayoutMode('editorial')}
                  className={cn("hover:text-brand-dark transition-colors pb-2 relative", layoutMode === 'editorial' && "text-brand-dark font-medium after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-brand-dark")}
                >
                  {layoutLabels[lang].editorial}
                </button>
                <button 
                  onClick={() => setLayoutMode('grid')}
                  className={cn("hover:text-brand-dark transition-colors pb-2 relative", layoutMode === 'grid' && "text-brand-dark font-medium after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-brand-dark")}
                >
                  {layoutLabels[lang].grid}
                </button>
              </div>

              {/* Editorial View */}
              {layoutMode === 'editorial' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {availableImages.map((img, i) => (
                    <motion.div 
                      key={img}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: (img === selectedImage ? 0 : (i % 4) * 0.05) }}
                      className={cn(
                        "overflow-hidden group bg-brand-beige/20",
                        failedImages[img] ? "cursor-default" : "cursor-zoom-in",
                        i % 3 === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                      )}
                      onClick={() => !failedImages[img] && setSelectedImage(img)}
                    >
                      {failedImages[img] ? (
                        <div className="w-full h-full bg-stone-100 flex flex-col justify-between p-6 md:p-8 select-none border border-brand-dark/5 transition-colors group-hover:bg-stone-50">
                          <div className="flex justify-between items-start text-[10px] tracking-widest text-brand-dark/30 font-sans">
                            <span>CARME SERRA ORIGEN</span>
                            <span>{activeCollection.year}</span>
                          </div>
                          <div className="text-center py-4">
                            <span className="block text-[11px] uppercase tracking-[0.3em] font-sans text-brand-dark/40 font-light">
                              {lang === 'es' ? 'FOTOGRAFÍA' : 'PHOTOGRAPHY'} {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="block text-[9px] uppercase tracking-[0.2em] font-sans text-brand-dark/25 mt-2">
                              {lang === 'es' ? 'Próximamente' : 'Coming soon'}
                            </span>
                          </div>
                          <div className="text-right text-[10px] tracking-[0.25em] text-brand-dark/25 uppercase font-serif italic">
                            {activeCollection.title}
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={encodeURI(img)} 
                          alt={`${activeCollection.title} ${i}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          referrerPolicy="no-referrer"
                          onError={() => {
                            setFailedImages(prev => ({ ...prev, [img]: true }));
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Grid View */}
              {layoutMode === 'grid' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {availableImages.map((img, i) => (
                    <motion.div 
                      key={img}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: (img === selectedImage ? 0 : (i % 6) * 0.05) }}
                      className={cn(
                        "overflow-hidden aspect-[3/4] group bg-brand-beige/20",
                        failedImages[img] ? "cursor-default" : "cursor-zoom-in"
                      )}
                      onClick={() => !failedImages[img] && setSelectedImage(img)}
                    >
                      {failedImages[img] ? (
                        <div className="w-full h-full bg-stone-100 flex flex-col justify-between p-4 md:p-6 select-none border border-brand-dark/5 transition-colors group-hover:bg-stone-50">
                          <div className="flex justify-between items-start text-[8px] md:text-[9px] tracking-widest text-brand-dark/30 font-sans">
                            <span>C.S ORIGEN</span>
                            <span>{activeCollection.year}</span>
                          </div>
                          <div className="text-center py-2">
                            <span className="block text-[10px] uppercase tracking-[0.25em] font-sans text-brand-dark/40 font-light">
                              {lang === 'es' ? 'FOTO' : 'PHOTO'} {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="block text-[8px] uppercase tracking-[0.15em] font-sans text-brand-dark/25 mt-1.5">
                              {lang === 'es' ? 'Próximamente' : 'Coming soon'}
                            </span>
                          </div>
                          <div className="text-right text-[8px] md:text-[9px] tracking-[0.2em] text-brand-dark/25 uppercase font-serif italic truncate max-w-full">
                            {activeCollection.title}
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={encodeURI(img)} 
                          alt={`${activeCollection.title} ${i}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          referrerPolicy="no-referrer"
                          onError={() => {
                            setFailedImages(prev => ({ ...prev, [img]: true }));
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer lang={lang} />
        <Lightbox 
          isOpen={!!selectedImage} 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      </div>
    );
  }

  if (view === 'contact') {
    return (
      <div className="min-h-screen bg-brand-beige text-brand-dark">
        <Header lang={lang} setLang={setLang} setView={setView} isSubpage={true} />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <button 
              onClick={navigateToHome}
              className="mb-12 text-[15px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              <ChevronLeft size={14} /> {lang === 'es' ? 'Volver' : 'Back'}
            </button>

            {/* Title with Horizontal Line */}
            <div className="mb-20">
              <h1 className="text-2xl font-medium mb-4 font-sans uppercase tracking-[0.14em]">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </h1>
              <div className="w-full h-[1px] bg-brand-dark/20" />
            </div>

            {/* Centered Contact Info */}
            <div className="max-w-2xl mx-auto text-center space-y-16 mb-24">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] font-sans font-semibold mb-4 opacity-70">
                  {lang === 'es' ? 'CONSULTAS GENERALES' : 'GENERAL INQUIRIES'}
                </span>
                <a href="mailto:carmeserracrespi@gmail.com" className="text-lg md:text-xl font-avenir font-thin underline underline-offset-8 decoration-brand-dark/20 hover:decoration-brand-dark transition-all">
                  carmeserracrespi@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] font-sans font-semibold mb-4 opacity-70">
                  {lang === 'es' ? 'REDES SOCIALES' : 'SOCIAL MEDIA'}
                </span>
                <a href="https://www.instagram.com/carme.serra_" className="text-lg md:text-xl font-avenir font-thin underline underline-offset-8 decoration-brand-dark/20 hover:decoration-brand-dark transition-all">
                  @carmeserra.origen
                </a>
              </div>
            </div>

            {/* Large Feature Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full aspect-[16/9] mb-32 overflow-hidden"
            >
              <img 
                src="/home/editorial1.jpg" 
                alt="Contact Editorial" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Send Message Form */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-lg font-medium mb-12 text-center font-sans uppercase tracking-[0.14em]">
                {lang === 'es' ? 'Envía un mensaje' : 'Send a message'}
              </h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-12 bg-brand-dark/5 rounded-sm"
                >
                  <p className="font-avenir font-thin tracking-wide text-lg">
                    {lang === 'es' ? 'Gracias. Tu mensaje ha sido enviado correctamente.' : 'Thank you. Your message has been sent successfully.'}
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-[10px] uppercase tracking-widest border-b border-brand-dark/20 pb-1"
                  >
                    {lang === 'es' ? 'Enviar otro' : 'Send another'}
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-12" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-semibold opacity-40">{lang === 'es' ? 'Nombre' : 'Name'}</label>
                      <input 
                        required
                        id="name"
                        name="name"
                        type="text" 
                        className="w-full bg-transparent border-b border-brand-dark/10 py-2 focus:border-brand-dark transition-colors outline-none font-avenir font-thin tracking-wide text-[16px]"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-semibold opacity-40">Email</label>
                      <input 
                        required
                        id="email"
                        name="email"
                        type="email" 
                        className="w-full bg-transparent border-b border-brand-dark/10 py-2 focus:border-brand-dark transition-colors outline-none font-avenir font-thin tracking-wide text-[16px]"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-semibold opacity-40">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
                    <textarea 
                      required
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-transparent border-b border-brand-dark/10 py-2 focus:border-brand-dark transition-colors outline-none resize-none font-avenir font-thin tracking-wide text-[16px]"
                    />
                  </div>
                  
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm font-avenir text-center">
                      {lang === 'es' ? 'Hubo un error al enviar. Por favor, inténtalo de nuevo.' : 'There was an error sending. Please try again.'}
                    </p>
                  )}

                  <div className="text-center">
                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={cn(
                        "btn-primary min-w-[200px] transition-all",
                        formStatus === 'submitting' && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {formStatus === 'submitting' 
                        ? (lang === 'es' ? 'Enviando...' : 'Sending...') 
                        : (lang === 'es' ? 'Enviar' : 'Send')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-beige">
      <Header lang={lang} setLang={setLang} setView={setView} />
      
      <main id="home">
        <Hero lang={lang} />

        {/* Manifesto Section */}
        <section id="lookboard" className="py-32 px-6 md:px-12 bg-white text-brand-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div 
                className="lg:col-span-7 aspect-[4/3] relative overflow-hidden group cursor-zoom-in bg-brand-beige/30"
                onClick={() => setSelectedImage("/collections/img21.jpg")}
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 0.8 }}
                  whileHover={{ scale: 0.85 }}
                  transition={{ duration: 1.5 }}
                  src="/collections/img21.jpg"
                  alt={t.lookboard.tag}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5">
                <span className="section-tag">{t.lookboard.tag}</span>
                <h2 className="text-[17.6px] md:text-[30.4px] mb-8 leading-tight font-sans font-light uppercase tracking-[0.14em]">
                  {t.lookboard.title.replace(/\*/g, '')}
                </h2>
                <p className="text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] max-w-lg mb-12 whitespace-pre-line text-justify">
                  {t.lookboard.description}
                </p>
                <button 
                  onClick={navigateToPhilosophy}
                  className="inline-block px-10 py-4 border border-brand-dark/20 text-[14px] uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-brand-beige transition-all duration-500 font-sans tracking-widest"
                >
                  {t.lookboard.philosophy}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section id="collections" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="text-[17.6px] md:text-[30.4px] leading-tight font-sans font-light uppercase tracking-[0.14em]">
              {t.collections.tag}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {collections.map((col, i) => (
              <div key={col.title} onClick={() => navigateToCollection(col)} className="px-0">
                <CollectionCard 
                  title={col.title}
                  year={col.year}
                  images={col.images}
                  index={i}
                  viewLabel={t.collections.view}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Macro Details Section - Parallax Effect */}
        <section id="texture" className="relative h-[80vh] overflow-hidden bg-brand-dark">
          <motion.div 
            initial={{ y: "10%" }}
            whileInView={{ y: "-10%" }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute inset-0 opacity-40"
          >
            <img 
              src="/home/detail1.jpg" 
              alt={t.macro.tag} 
              className="w-full h-[120%] object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[12px] uppercase tracking-[0.6em] text-brand-beige mb-8 block"
              >
                {t.macro.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[17.6px] md:text-[30.4px] text-brand-beige font-sans font-light uppercase tracking-[0.14em]"
              >
                {t.macro.quote}
              </motion.h2>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={navigateToUpcycling}
                className="inline-block mt-12 px-10 py-4 border border-brand-beige/20 text-[14px] font-normal uppercase tracking-[0.3em] text-brand-beige hover:bg-brand-beige hover:text-brand-dark transition-all duration-500 font-sans tracking-widest"
              >
                Upcycling
              </motion.button>
            </div>
          </div>
        </section>

        {/* Editorial Grid Section */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-7 aspect-[4/5] overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src="/home/editorial1.jpg" 
                  alt="Editorial 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
                <div className="aspect-square overflow-hidden">
                  <motion.img 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src="/home/editorial2.jpg" 
                    alt="Editorial 2" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    src="/collections/img_42.jpg" 
                    alt="Editorial 3" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="section-tag">{t.about.tag}</span>
              <h2 className="text-[17.6px] md:text-[30.4px] mb-8 leading-tight font-sans font-light uppercase tracking-[0.14em]">
                {t.about.narratives.replace(/\*/g, '')}
              </h2>
              <div className="space-y-6 text-brand-muted leading-relaxed font-avenir font-thin tracking-wide text-[16px] max-w-lg">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              
              <div className="mt-12 flex gap-12">
                <div>
                  <span className="block text-[14px] uppercase tracking-widest text-brand-dark font-semibold mb-2">{t.about.education}</span>
                  <span className="text-[16px] text-brand-muted font-avenir font-thin tracking-wide">{t.about.eduDetail}</span>
                </div>
                <div>
                  <span className="block text-[14px] uppercase tracking-widest text-brand-dark font-semibold mb-2">{t.about.focus}</span>
                  <span className="text-[16px] text-brand-muted font-avenir font-thin tracking-wide">{t.about.focusDetail}</span>
                </div>
              </div>

              <div className="flex justify-center max-w-[280px] md:max-w-[320px]">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-8 md:mt-12"
                >
                  <img 
                    src="/brand/firma_negra.png" 
                    alt="Carme Serra Signature" 
                    className="h-24 md:h-32 object-contain opacity-90" 
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="/about/about.jpg"
                alt={t.about.tag}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      
      <Lightbox 
        isOpen={!!selectedImage} 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
