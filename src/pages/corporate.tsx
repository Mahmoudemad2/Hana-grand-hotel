import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Briefcase, Building, Handshake, CheckCircle, ShieldCheck, Receipt, Zap, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "201080249780";

const corporateSchema = z.object({
  companyName: z.string().min(2, "Required"),
  contactName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Required"),
  numberOfEmployees: z.string().optional(),
  estimatedNightsPerMonth: z.string().optional(),
  message: z.string().min(10, "Please provide more details")
});

const offerSchema = z.object({
  companyName: z.string().min(2, "اسم الشركة مطلوب"),
  contactName: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(8, "رقم الهاتف مطلوب"),
  employees: z.string().min(1, "اختر عدد الأفراد"),
  nights: z.string().min(1, "اختر عدد الليالي"),
  budget: z.string().min(1, "اختر الميزانية"),
  notes: z.string().optional()
});

export default function Corporate() {
  const { t } = useI18n();

  const form = useForm<z.infer<typeof corporateSchema>>({
    resolver: zodResolver(corporateSchema),
    defaultValues: {
      companyName: "", contactName: "", email: "",
      phone: "", numberOfEmployees: "", estimatedNightsPerMonth: "", message: ""
    }
  });

  const offerForm = useForm<z.infer<typeof offerSchema>>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      companyName: "", contactName: "", phone: "",
      employees: "", nights: "", budget: "", notes: ""
    }
  });

  const onSubmit = (data: z.infer<typeof corporateSchema>) => {
    const lines = [
      "🏢 *طلب تعاقد شركات — Hana Grand Hotel*",
      "",
      `🏭 *اسم الشركة:* ${data.companyName}`,
      `👤 *الشخص المسؤول:* ${data.contactName}`,
      `📧 *البريد الإلكتروني:* ${data.email}`,
      `📞 *رقم الهاتف:* ${data.phone}`,
      data.estimatedNightsPerMonth ? `🌙 *معدل الليالي شهرياً:* ${data.estimatedNightsPerMonth}` : null,
      "",
      `📝 *تفاصيل إضافية:*\n${data.message}`,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    form.reset();
  };

  const onOfferSubmit = (data: z.infer<typeof offerSchema>) => {
    const msg = `مرحباً، أنا من شركة ${data.companyName}
الاسم: ${data.contactName}
رقم الهاتف: ${data.phone}

عدد الأفراد: ${data.employees}
عدد الليالي: ${data.nights}
الميزانية: ${data.budget}

تفاصيل إضافية:
${data.notes || "لا يوجد"}

نرغب في الحصول على عرض خاص للشركات.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    offerForm.reset();
  };

  const benefits = [
    { icon: Briefcase, title: "أسعار تفضيلية", desc: "خصومات خاصة على الغرف والخدمات للشركات المتعاقدة." },
    { icon: CheckCircle, title: "أولوية الحجز", desc: "ضمان توفر الغرف لضيوف شركتكم في أوقات الذروة." },
    { icon: Building, title: "قاعات اجتماعات متطورة", desc: "استخدام مخفض لقاعات الاجتماعات المجهزة بالكامل." },
    { icon: Handshake, title: "مدير حسابات مخصص", desc: "نقطة اتصال واحدة لتلبية كافة احتياجات شركتكم." },
  ];

  const trustPoints = [
    { icon: ShieldCheck, label: "أسعار خاصة للشركات" },
    { icon: Receipt,     label: "فواتير شهرية منتظمة" },
    { icon: Zap,         label: "سرعة في تأكيد الحجوزات" },
  ];

  const selectClass = "flex h-12 w-full border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-foreground text-background py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="Corporate Meeting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Hana Grand Business</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{t("corporate.title")}</h1>
            <p className="text-background/80 max-w-2xl mx-auto text-lg md:text-xl">{t("corporate.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      {/* ===== SPECIAL OFFER SECTION ===== */}
      <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-20 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide border border-primary/30">
              عرض حصري
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              💼 عرض خاص للشركات والمصانع
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              حدد ميزانيتك واحصل على أفضل عرض الآن
            </p>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-3 mb-8"
          >
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-xl py-4 px-2 text-center">
                <tp.icon className="w-6 h-6 text-primary" />
                <span className="text-white text-xs md:text-sm font-semibold leading-snug">{tp.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold px-5 py-2.5 rounded-full">
              ⚠️ عدد محدود من التعاقدات المتاحة شهرياً
            </span>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-10"
          >
            <Form {...offerForm}>
              <form onSubmit={offerForm.handleSubmit(onOfferSubmit)} className="space-y-5" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={offerForm.control} name="companyName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 font-semibold text-sm">🏭 اسم الشركة / المصنع</FormLabel>
                      <FormControl>
                        <input className="w-full h-12 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition" placeholder="مثال: شركة النيل للصناعات" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={offerForm.control} name="contactName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 font-semibold text-sm">👤 اسم الشخص المسؤول</FormLabel>
                      <FormControl>
                        <input className="w-full h-12 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition" placeholder="الاسم الكامل" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={offerForm.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-700 font-semibold text-sm">📞 رقم الهاتف / الجوال</FormLabel>
                    <FormControl>
                      <input type="tel" className="w-full h-12 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition" placeholder="01xxxxxxxxx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <FormField control={offerForm.control} name="employees" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 font-semibold text-sm">👥 عدد الأفراد</FormLabel>
                      <FormControl>
                        <select className="w-full h-12 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition" {...field}>
                          <option value="">اختر...</option>
                          <option value="1-5">1 – 5 أفراد</option>
                          <option value="5-10">5 – 10 أفراد</option>
                          <option value="10-20">10 – 20 فرد</option>
                          <option value="20+">أكثر من 20 فرد</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={offerForm.control} name="nights" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 font-semibold text-sm">🌙 عدد الليالي</FormLabel>
                      <FormControl>
                        <select className="w-full h-12 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition" {...field}>
                          <option value="">اختر...</option>
                          {[1,2,3,4,5,6,7,10,14,21,30].map(n => (
                            <option key={n} value={`${n} ${n === 1 ? "ليلة" : "ليالي"}`}>{n} {n === 1 ? "ليلة" : "ليالي"}</option>
                          ))}
                          <option value="أكثر من 30 ليلة">أكثر من 30 ليلة</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={offerForm.control} name="budget" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 font-semibold text-sm">💰 الميزانية / الليلة</FormLabel>
                      <FormControl>
                        <select className="w-full h-12 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition" {...field}>
                          <option value="">اختر...</option>
                          <option value="500 - 800 جنيه">500 – 800 جنيه</option>
                          <option value="800 - 1200 جنيه">800 – 1200 جنيه</option>
                          <option value="1200 - 1800 جنيه">1200 – 1800 جنيه</option>
                          <option value="1800+ جنيه">1800+ جنيه</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={offerForm.control} name="notes" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-700 font-semibold text-sm">📝 ملاحظات إضافية (اختياري)</FormLabel>
                    <FormControl>
                      <textarea rows={3} className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-50 transition resize-none" placeholder="أي متطلبات خاصة أو تفاصيل تود إضافتها..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
                >
                  <MessageCircle className="w-6 h-6" />
                  احصل على عرضك الآن
                </button>
                <p className="text-center text-xs text-zinc-400 mt-2">سيتم فتح واتساب مباشرةً مع تفاصيل طلبك</p>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Benefits */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold mb-4">{t("corporate.benefits")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((b, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-card p-8 border border-border hover:border-primary/50 transition-all text-center group shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <b.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Old enquiry form */}
        <div className="bg-secondary p-8 md:p-16 rounded-lg max-w-4xl mx-auto border border-border/50 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">طلب تعاقد للشركات</h2>
            <p className="text-muted-foreground">قم بتعبئة النموذج وسيقوم فريق المبيعات بالتواصل معك بأسعار وعروض مخصصة.</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="companyName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم الشركة / المؤسسة</FormLabel>
                    <FormControl><Input className="h-12 bg-background rounded-none border-border" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="contactName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>الشخص المسؤول (الاسم)</FormLabel>
                    <FormControl><Input className="h-12 bg-background rounded-none border-border" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني للعمل</FormLabel>
                    <FormControl><Input type="email" className="h-12 bg-background rounded-none border-border" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الهاتف / الجوال</FormLabel>
                    <FormControl><Input type="tel" className="h-12 bg-background rounded-none border-border" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="estimatedNightsPerMonth" render={({ field }) => (
                  <FormItem>
                    <FormLabel>المعدل التقريبي لليالي الحجز شهرياً</FormLabel>
                    <FormControl>
                      <select className="flex h-12 w-full border border-border bg-background px-3 py-1 shadow-sm focus-visible:outline-none" {...field}>
                        <option value="">اختر...</option>
                        <option value="1-10">1 إلى 10 ليالي</option>
                        <option value="11-50">11 إلى 50 ليلة</option>
                        <option value="50+">أكثر من 50 ليلة</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>تفاصيل إضافية عن احتياجات شركتكم</FormLabel>
                  <FormControl><Textarea className="min-h-[120px] bg-background rounded-none border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-none shadow-lg">
                إرسال طلب التعاقد عبر واتساب
              </Button>
            </form>
          </Form>
        </div>
      </div>

    </div>
  );
}
