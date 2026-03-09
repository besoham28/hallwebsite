import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    text: "Mangal Karyalay made our wedding day absolutely magical. The décor, catering, and coordination were beyond our expectations. Every guest was impressed!",
    rating: 5,
  },
  {
    name: "Sneha & Amit Patil",
    event: "Grand Wedding",
    text: "From the first visit to the final farewell, the team was incredibly professional. The hall looked stunning, and our families still talk about how perfect everything was.",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kulkarni",
    event: "Corporate Event",
    text: "We hosted our annual conference here and were amazed by the facilities. The AV setup, catering, and staff professionalism were top-notch.",
    rating: 5,
  },
  {
    name: "Meera & Vikram Joshi",
    event: "Engagement Ceremony",
    text: "Our engagement was a dream come true thanks to Mangal Karyalay. The intimate setup and attention to detail made the event truly special.",
    rating: 5,
  },
  {
    name: "Anjali & Rohan Deshmukh",
    event: "Sangeet Night",
    text: "The energy and acoustics of the hall are incredible! Our Sangeet performance felt like a professional production. The lighting team did a phenomenal job.",
    rating: 5,
  },
  {
    name: "Mrs. Sunita & Mr. Vilas Gokhale",
    event: "25th Anniversary",
    text: "Celebrating our silver jubilee here was the best decision. The staff treated us like royalty, and the traditional Maharashtrian menu was authentic and delicious.",
    rating: 5,
  },
  {
    name: "Karan & Simran Kaur",
    event: "Destination Styled Wedding",
    text: "Even with a large guest list, everything felt personal and well-managed. The pillar-less hall gave everyone a perfect view of the ceremony. Simply elite.",
    rating: 5,
  },
  {
    name: "Aditi Sane",
    event: "Classical Arangetram",
    text: "The stage is grand and perfect for classical performances. The acoustics and the green room facilities were excellent for my Arangetram debut.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main reveal animation
      gsap.from(".section-header > *", {
        scrollTrigger: { trigger: ".section-header", start: "top 95%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        clearProps: "all"
      });

      // Infinite marquee logic
      const marquee = marqueeRef.current;
      if (!marquee) return;

      const totalWidth = marquee.scrollWidth / 2;
      
      const animation = gsap.to(marquee, {
        x: -totalWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

      marquee.addEventListener("mouseenter", () => animation.pause());
      marquee.addEventListener("mouseleave", () => animation.play());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-transparent relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay for depth */}
      <div className="container mx-auto text-center relative z-10">
        <div className="section-header mb-16 text-center">
          <p className="text-gold text-lg md:text-xl uppercase tracking-[0.25em] font-body mb-3 font-bold">
            Testimonials
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
            Voices of Excellence
          </h2>
          <div className="gold-divider" />
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradients for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 hidden md:block" />

        <div 
          ref={marqueeRef}
          className="flex gap-8 whitespace-nowrap will-change-transform"
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card inline-block w-[320px] sm:w-[400px] md:w-[500px] bg-white/5 backdrop-blur-sm p-6 sm:p-10 border border-gold/10 relative group hover:bg-white/10 transition-all duration-500 whitespace-normal"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="font-body text-cream/90 text-base md:text-lg leading-relaxed mb-10 italic relative z-10">
                "{t.text}"
              </p>

              <div className="mt-auto border-t border-gold/10 pt-6">
                <p className="font-display text-xl font-bold text-gold mb-1">
                  {t.name}
                </p>
                <p className="text-cream/60 text-xs uppercase tracking-[0.2em] font-body">
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
