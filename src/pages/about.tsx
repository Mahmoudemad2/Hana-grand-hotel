import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-foreground text-background py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80" alt="Hotel Exterior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-primary">{t("about.title")}</h1>
            <p className="text-background/90 max-w-2xl mx-auto text-lg md:text-xl">
              تاريخ من الضيافة العربية الأصيلة في ثوب من الفخامة المعاصرة.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">بداية رحلة الفخامة</h2>
            <div className="w-16 h-1 bg-primary mb-8" />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                تأسس هانا جراند هوتيل في قلب مدينة العاشر من رمضان ليكون المعلم الأبرز والوجهة الأولى لرجال الأعمال والمستثمرين، وكذلك العائلات الباحثة عن إقامة تتسم بالهدوء والرقي.
              </p>
              <p>
                لقد صممنا كل زاوية في الفندق لتعكس معايير الضيافة العالمية الممزوجة بالروح العربية الأصيلة، لنضمن لضيوفنا تجربة تفوق توقعاتهم وتصنع ذكريات لا تُنسى.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[500px]">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="Hotel Lobby" className="w-full h-full object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 max-w-[250px] shadow-xl">
              <div className="font-serif text-5xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-widest font-bold">عاماً من التميز في الضيافة</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-foreground text-primary py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "120+", label: "غرفة وجناح فاخر" },
              { num: "3", label: "مطاعم ومقاهي عالمية" },
              { num: "5", label: "قاعات مؤتمرات" },
              { num: "50k+", label: "ضيف سعيد سنوياً" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.num}</div>
                <div className="text-background/70 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card p-12 border border-border/50 text-center hover:shadow-xl transition-shadow">
            <h3 className="font-serif text-3xl font-bold mb-6 text-primary">{t("about.vision")}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              أن نكون الخيار الأول والوجهة الرائدة للضيافة الفاخرة في المنطقة، مع تقديم تجربة إقامة استثنائية ترتقي بمعايير الجودة والتميز.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card p-12 border border-border/50 text-center hover:shadow-xl transition-shadow">
            <h3 className="font-serif text-3xl font-bold mb-6 text-primary">{t("about.mission")}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              الالتزام المطلق بتقديم أرقى الخدمات الفندقية التي تلبي احتياجات ضيوفنا بدقة واحترافية، مع توفير بيئة عمل محفزة لفريقنا.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
