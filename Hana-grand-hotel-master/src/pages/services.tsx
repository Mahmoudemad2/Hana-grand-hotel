import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Utensils, Dumbbell, Presentation, Waves, Sparkles, Car, Briefcase, ConciergeBell } from "lucide-react";

export default function Services() {
  const { t } = useI18n();

  const services = [
    { icon: Utensils, title: "مطعم ميفيا الفاخر", desc: "نقدم أشهى الأطباق العالمية والشرقية المحضرة بأيدي أمهر الطهاة لترضي جميع الأذواق في أجواء ساحرة." },
    { icon: Dumbbell, title: "نادي صحي رياضي", desc: "نادي رياضي مجهز بأحدث الأجهزة الرياضية مع مدربين متخصصين لضمان الحفاظ على لياقتك." },
    { icon: Presentation, title: "قاعات اجتماعات", desc: "قاعات مجهزة بأحدث التقنيات الصوتية والمرئية تناسب جميع أنواع المؤتمرات وفعاليات الأعمال." },
    { icon: Waves, title: "مسبح خارجي", desc: "استرخ تحت أشعة الشمس في مسبحنا الخارجي مع خدمة تقديم المشروبات والوجبات الخفيفة." },
    { icon: Sparkles, title: "سبا ومركز استرخاء", desc: "تجربة استرخاء متكاملة تشمل جلسات التدليك، الساونا، والجاكوزي لتجديد نشاطك." },
    { icon: Car, title: "نقل من وإلى المطار", desc: "خدمة سيارات ليموزين فاخرة متوفرة على مدار الساعة لتأمين وصولك براحة وأمان." },
    { icon: Briefcase, title: "مركز الأعمال", desc: "مركز متكامل لتلبية كافة احتياجاتك المكتبية من طباعة وتصوير واتصال عالي السرعة." },
    { icon: ConciergeBell, title: "خدمة الغرف 24/7", desc: "خدمة غرف مميزة متوفرة على مدار الساعة لتلبية كافة طلباتك بضغطة زر." },
  ];

  return (
    <div className="pt-24 pb-16 bg-muted/10">
      <div className="bg-foreground text-background py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/pattern.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-primary">{t("services.title")}</h1>
            <p className="text-background/80 max-w-2xl mx-auto text-lg md:text-xl">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-card p-8 border border-border hover:border-primary group transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-4 font-serif">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Featured Service Image Split */}
      <div className="bg-foreground text-background">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[400px] lg:h-auto relative">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" alt="Restaurant" className="w-full h-full object-cover" />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary">تذوق الفخامة في مطاعمنا</h2>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              يقدم هانا جراند هوتيل تجربة طعام لا مثيل لها عبر مطاعم متنوعة تلبي كافة الأذواق. من الأطباق المحلية الأصيلة إلى المأكولات العالمية الفاخرة، كل طبق يحكي قصة من الشغف والإبداع.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="font-bold text-xl mb-2 text-white">الإفطار المفتوح</div>
                <div className="text-background/50 text-sm">يومياً من 6:30 ص إلى 10:30 ص</div>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 text-white">العشاء الراقي</div>
                <div className="text-background/50 text-sm">يومياً من 7:00 م إلى 11:30 م</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
