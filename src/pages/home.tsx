import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useRooms } from "@/hooks/use-rooms";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users, ArrowRight, ArrowLeft, Star, StarHalf } from "lucide-react";
import Rooms from "@/pages/rooms";
export default function Home() {
  const { t, language } = useI18n();
  const [, setLocation] = useLocation();
  const { data: rooms } = useRooms();

  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2"
  });

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(booking).toString();
    setLocation(`/booking?${params}`);
  };

  const offers = [
    { title: "Weekend Getaway", discount: "20%", desc: "Enjoy a relaxing weekend with complimentary spa access and late checkout.", img: "https://images.unsplash.com/photo-1551882547-ff40c4a49f8b?w=800&q=80" },
    { title: "Corporate Package", discount: "15%", desc: "Special rates for business travelers including meeting room credits.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
    { title: "Family Summer", discount: "30%", desc: "Create unforgettable memories. Kids under 12 stay and eat free.", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
        {/* hero background hotel exterior */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hotel-exterior.jpg`}
            alt="Hana Grand Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-3 drop-shadow-lg tracking-wide"
          >
            Hana Grand Hotel
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm md:text-base"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-white/80 text-sm md:text-base mb-10"
          >
            العاشر من رمضان - المجاورة 25 - أمام الأردنية
          </motion.p>

          {/* Quick Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-background/95 backdrop-blur-md rounded-lg p-2 md:p-4 max-w-4xl mx-auto shadow-2xl"
          >
            <form onSubmit={handleQuickBook} className="flex flex-col md:flex-row gap-4 text-foreground">
              <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-e border-border flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-primary" />
                <div className="flex flex-col text-start w-full">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">{t("hero.checkin")}</label>
                  <input 
                    type="date" 
                    className="bg-transparent border-none outline-none text-sm md:text-base cursor-pointer"
                    value={booking.checkIn}
                    onChange={e => setBooking({...booking, checkIn: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-e border-border flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-primary" />
                <div className="flex flex-col text-start w-full">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">{t("hero.checkout")}</label>
                  <input 
                    type="date" 
                    className="bg-transparent border-none outline-none text-sm md:text-base cursor-pointer"
                    value={booking.checkOut}
                    onChange={e => setBooking({...booking, checkOut: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex-1 px-4 py-2 flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <div className="flex flex-col text-start w-full">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">{t("hero.guests")}</label>
                  <select 
                    className="bg-transparent border-none outline-none text-sm md:text-base cursor-pointer appearance-none"
                    value={booking.guests}
                    onChange={e => setBooking({...booking, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <Button type="submit" className="h-14 px-8 rounded-none bg-primary hover:bg-primary/90 text-white font-bold text-lg md:w-auto w-full">
                {t("hero.search")}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>










      {/* Featured Rooms */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Rooms/>
          <div className="mt-12 text-center">
            <Link href="/rooms">
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 rounded-none font-bold">
                عرض كل الغرف {language === "ar" ? <ArrowLeft className="ml-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/pattern.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-primary">{t("offers.title")}</h2>
            <p className="text-background/70">{t("offers.subtitle")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-background/5 p-8 border border-background/10 hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-full mb-6 text-primary font-serif font-bold text-xl">
                  {offer.discount}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">{offer.title}</h3>
                <p className="text-background/60 leading-relaxed mb-6">{offer.desc}</p>
                <Link href="/booking">
                  <Button variant="link" className="text-primary p-0 hover:text-primary/80">
                    {t("nav.book")} {language === "ar" ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>











      {/* Video Review Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">تجربة حقيقية</span>
            <h2 className="font-serif text-4xl font-bold mb-4">شاهد تجربة ضيوفنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative rounded-none overflow-hidden shadow-2xl border border-border/50 bg-black"
          >
            <video
              src={`${import.meta.env.BASE_URL}images/hotel-review.mp4`}
              controls
              playsInline
              className="w-full max-h-[600px] object-contain"
              poster={`${import.meta.env.BASE_URL}images/hotel-exterior.jpg`}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-16">آراء ضيوفنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-card p-8 shadow-sm">
                <div className="flex justify-center text-primary mb-4">
                  <Star className="fill-primary" /><Star className="fill-primary" /><Star className="fill-primary" /><Star className="fill-primary" /><StarHalf className="fill-primary" />
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "إقامة استثنائية بكل المقاييس. طاقم العمل متعاون جداً والمرافق على أعلى مستوى من النظافة والفخامة. أوصي به بشدة."
                </p>
                <div className="font-bold text-foreground">أحمد محمد</div>
                <div className="text-sm text-muted-foreground">زائر لأغراض الأعمال</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
