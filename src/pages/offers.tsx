import { motion } from "framer-motion";
import { MessageCircle, Clock, Flame, Star, Users } from "lucide-react";

const WHATSAPP_NUMBER = "201080249780";

const units = [
  {
    id: 1,
    title: "صالون رجال الأعمال",
    desc: "صالون فاخر مجهز بالكامل للاجتماعات وجلسات العمل، يتسع لـ 10 أفراد.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ribbon: "الأكثر طلباً",
    ribbonColor: "bg-amber-500",
    priceBefore: "2500",
    priceAfter: "2000",
    discount: "خصم 20%",
    tag: "best",
    bookings: "حُجز 8 مرات هذا الأسبوع",
  },
  {
    id: 2,
    title: "شقة فاخرة للشركات",
    desc: "شقة واسعة بغرفتين وصالة مجهزة لإقامة موظفي الشركات بأسعار تفضيلية.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ribbon: "عرض خاص",
    ribbonColor: "bg-red-600",
    priceBefore: "1800",
    priceAfter: "1400",
    discount: "خصم 22%",
    tag: "",
    bookings: "حُجز 5 مرات هذا الأسبوع",
  },
  {
    id: 3,
    title: "جناح الاجتماعات المتكامل",
    desc: "جناح مخصص للاجتماعات مع إنترنت عالي السرعة وشاشة عرض احترافية.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80",
    ribbon: "لفترة محدودة",
    ribbonColor: "bg-primary",
    priceBefore: "3200",
    priceAfter: "2500",
    discount: "خصم 22%",
    tag: "",
    bookings: "حُجز 3 مرات هذا الأسبوع",
  },
  {
    id: 4,
    title: "شقة عائلية للمصانع",
    desc: "مناسبة لإقامة طاقم العمل، غرفتان نوم وصالة كبيرة بأسعار شهرية مخفضة.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    ribbon: "عرض مميز",
    ribbonColor: "bg-emerald-600",
    priceBefore: "1500",
    priceAfter: "1100",
    discount: "خصم 27%",
    tag: "",
    bookings: "حُجز 6 مرات هذا الأسبوع",
  },
  {
    id: 5,
    title: "صالون التدريب والتأهيل",
    desc: "صالة تدريب مجهزة بأجهزة العرض والمقاعد لعقد دورات وورش العمل.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    ribbon: "خصم 15%",
    ribbonColor: "bg-blue-600",
    priceBefore: "2800",
    priceAfter: "2380",
    discount: "خصم 15%",
    tag: "",
    bookings: "حُجز 4 مرات هذا الأسبوع",
  },
  {
    id: 6,
    title: "جناح كبار الشخصيات VIP",
    desc: "أرقى الأجنحة الفندقية لضيوف الشركات والوفود الرسمية بخدمات استثنائية.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ribbon: "VIP حصري",
    ribbonColor: "bg-purple-700",
    priceBefore: "4500",
    priceAfter: "3600",
    discount: "خصم 20%",
    tag: "",
    bookings: "حُجز 2 مرات هذا الأسبوع",
  },
];

function openWhatsApp(unitTitle: string) {
  const msg = `مرحباً، أريد الاستفسار عن ${unitTitle} والحصول على عرض خاص للشركات.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

export default function Offers() {
  return (
    <div className="pt-20 pb-16 bg-zinc-50 min-h-screen" dir="rtl">

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              <Flame className="w-4 h-4" /> عروض محدودة لفترة قصيرة
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
              🔥 عروض الصالونات والشقق
            </h1>
            <p className="text-zinc-400 text-lg mb-6">
              أسعار استثنائية للشركات والمصانع — لا تفوّت الفرصة
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-primary" /> أسعار خاصة للشركات
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" /> فواتير شهرية منتظمة
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" /> تأكيد فوري للحجز
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Urgency Bar */}
      <div className="bg-red-600 text-white text-center py-3 text-sm font-bold tracking-wide">
        ⚠️ عروض محدودة — العروض محدودة ولا تتأخر في الحجز
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                unit.tag === "best" ? "ring-2 ring-amber-400" : ""
              }`}
            >
              {/* Image + Ribbon */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={unit.image}
                  alt={unit.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Ribbon badge */}
                <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                  <div className={`${unit.ribbonColor} text-white text-xs font-bold text-center py-1 shadow-md`}
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "-28px",
                      width: "120px",
                      transform: "rotate(45deg)",
                      transformOrigin: "center",
                    }}
                  >
                    {unit.ribbon}
                  </div>
                </div>

                {/* Discount pill */}
                <span className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {unit.discount}
                </span>

                {/* Best seller badge */}
                {unit.tag === "best" && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    <Star className="w-3 h-3 fill-zinc-900" /> الأكثر طلباً
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">{unit.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">{unit.desc}</p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{unit.priceAfter} جنيه</span>
                  <span className="text-sm text-zinc-400 line-through">{unit.priceBefore} جنيه</span>
                  <span className="text-xs text-zinc-400">/ الليلة</span>
                </div>

                {/* Booking count urgency */}
                <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-4 bg-amber-50 px-3 py-2 rounded-lg border border-amber-100">
                  <Flame className="w-3.5 h-3.5" />
                  {unit.bookings}
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openWhatsApp(unit.title)}
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 active:scale-95 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    احجز الآن
                  </button>
                  <button
                    onClick={() => openWhatsApp(`${unit.title} — طلب عرض سعر`)}
                    className="flex items-center justify-center gap-1.5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 active:scale-95"
                  >
                    اطلب عرض
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-bold text-white mb-3">هل تحتاج عرضاً مخصصاً؟</h2>
          <p className="text-zinc-400 mb-8 text-lg">تواصل معنا الآن وسنعدّ لك عرضاً حسب احتياجات شركتك</p>
          <button
            onClick={() => openWhatsApp("عرض مخصص للشركات")}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-green-900/30 transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            تواصل معنا عبر واتساب
          </button>
        </motion.div>
      </div>

    </div>
  );
}
