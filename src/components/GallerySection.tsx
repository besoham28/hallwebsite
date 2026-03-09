import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: hero1, label: "Grand Banquet Hall" },
  { src: hero2, label: "Wedding Stage" },
  { src: hero3, label: "Garden Venue" },
  { src: gallery1, label: "Dining Setup" },
  { src: gallery2, label: "Mandap Decoration" },
  { src: gallery3, label: "Venue Entrance" },
  { src: gallery4, label: "Reception Party" },
  { src: gallery5, label: "Engagement Stage" },
  { src: gallery6, label: "Guest Room" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header > *", {
        scrollTrigger: { trigger: ".section-header", start: "top 95%" },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.2, clearProps: "all"
      });
      gsap.from(".gallery-item", {
        scrollTrigger: { trigger: ".gallery-grid", start: "top 95%" },
        opacity: 0, y: 20, duration: 0.5, stagger: 0.05, clearProps: "all"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const openLightbox = (i: number) => {
    setLightbox(i);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-transparent relative z-10">
      <div className="container mx-auto text-center">
        <div className="section-header mb-12 text-center">
          <p className="section-subtitle mb-3 text-lg md:text-xl font-bold">Visual Tour</p>
          <h2 className="section-title mb-6 text-5xl md:text-6xl lg:text-7xl font-bold">Our Gallery</h2>
          <div className="gold-divider mb-10" />
          <p className="max-w-3xl mx-auto text-muted-foreground font-body leading-relaxed">
            Step into our world of elegance and grandeur. Our gallery showcases the 
            stunning transformations, architectural beauty, and heartfelt moments that 
            define the Mangal Karyalay experience.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className={`gallery-item relative overflow-hidden cursor-pointer group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? "h-full min-h-[300px] md:min-h-[500px]" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-end">
                <span className="text-cream font-body text-sm uppercase tracking-wider p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-royal/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-cream/70 hover:text-gold">
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 text-cream/70 hover:text-gold"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].label}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 text-cream/70 hover:text-gold"
          >
            <ChevronRight size={40} />
          </button>
          <p className="absolute bottom-6 text-cream font-body text-sm uppercase tracking-wider">
            {images[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
