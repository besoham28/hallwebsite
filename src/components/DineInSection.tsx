import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const menuShowcase = [
  { img: "/indian-thali.png", title: "The Maharaja Thali", desc: "Experience the grandeur of a complete royal Indian feast served on a silver platter." },
  { img: "/menu-1.png", title: "Dum Biryani Handi", desc: "Aromatic basmati rice cooked with authentic spices and tender marinated vegetables." },
  { img: "/menu-2.png", title: "Shahi Paneer", desc: "Cottage cheese simmered in a rich tomato and cashew creamy gravy." },
  { img: "/menu-4.png", title: "Tandoori Platter", desc: "Assortment of perfectly charred kebabs and tikkas from our traditional clay oven." },
  { img: "/menu-5.png", title: "Dal Makhani Set", desc: "Slow-cooked black lentils prepared overnight for a perfect creamy texture." },
  { img: "/menu-3.png", title: "Saffron Gulab Jamun", desc: "Classic sweet delicacy, served warm and garnished with premium saffron." },
];

const DineInSection = () => {
  return (
    <section id="dine-in" className="py-20 md:py-32 section-padding relative bg-transparent z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-gold uppercase tracking-[0.3em] font-bold mb-4">A Taste of Royalty</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fine Dining Experience
          </h2>
          <div className="gold-divider mx-auto mb-6"></div>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Savor carefully curated dishes prepared by our master chefs using the finest ingredients and traditional spices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Menu List */}
          <div className="space-y-12">
            {/* Category 1 */}
            <div>
              <h3 className="font-display text-2xl font-bold text-gold border-b border-gold/30 pb-3 mb-6">
                Regal Starters
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Paneer Tikka Shahi", desc: "Cottage cheese marinated in rich saffron and cream" },
                  { name: "Tandoori Malai Broccoli", desc: "Creamy tandoor-roasted broccoli with cardamom" },
                  { name: "Hara Bhara Kebab", desc: "Spinach and green pea patties with mild spices" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-body font-bold text-lg text-foreground">{item.name}</h4>
                      <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="font-display text-2xl font-bold text-gold border-b border-gold/30 pb-3 mb-6">
                Signature Main Course
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Dal Makhani Dum Pukht", desc: "Slow-cooked black lentils simmered over 24 hours" },
                  { name: "Navratan Korma", desc: "Mixed vegetable curry with cashew gravy and dry fruits" },
                  { name: "Dum Aloo Kashmiri", desc: "Stuffed potatoes in a rich, mild yogurt-based gravy" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-body font-bold text-lg text-foreground">{item.name}</h4>
                      <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Carousel Section */}
          <div className="relative animate-fade-in group w-full max-w-[90vw] md:max-w-none mx-auto pt-8">
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold to-gold-light rounded-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
            
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative z-10"
            >
              <CarouselContent>
                {menuShowcase.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-sm border border-gold/20 shadow-2xl">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32 pb-8 px-6 text-center">
                        <h4 className="font-display text-2xl md:text-3xl font-bold text-gold mb-2">{item.title}</h4>
                        <p className="font-body text-sm md:text-base text-white/90 max-w-md mx-auto">{item.desc}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-royal/80 text-gold hover:bg-gold hover:text-background border-gold border-2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-royal/80 text-gold hover:bg-gold hover:text-background border-gold border-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineInSection;
