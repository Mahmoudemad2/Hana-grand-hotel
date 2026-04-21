import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.rooms": "الغرف والأجنحة",
    "nav.offers": "🔥 العروض",
    "nav.corporate": "الشركات",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز الآن",
    "hero.subtitle": "فخامة لا تُنسى في قلب العاشر من رمضان",
    "hero.title": "هانا جراند هوتيل",
    "hero.checkin": "تسجيل الدخول",
    "hero.checkout": "تسجيل الخروج",
    "hero.guests": "الضيوف",
    "hero.search": "ابحث عن غرف",
    "offers.title": "عروض حصرية",
    "offers.subtitle": "اكتشف أفضل الباقات المصممة خصيصاً لك",
    "rooms.title": "غرفنا وأجنحتنا",
    "rooms.subtitle": "تصميم يجمع بين الراحة والأناقة المطلقة",
    "rooms.night": "لليلة",
    "rooms.size": "مساحة",
    "rooms.maxGuests": "أقصى عدد ضيوف",
    "footer.desc": "وجهتك الأولى للفخامة والراحة في العاشر من رمضان. نقدم تجربة إقامة استثنائية لرجال الأعمال والعائلات.",
    "footer.links": "روابط سريعة",
    "footer.contact": "معلومات التواصل",
    "footer.rights": "جميع الحقوق محفوظة لهانا جراند هوتيل",
    "booking.step1": "اختر الغرفة",
    "booking.step2": "تفاصيل الإقامة",
    "booking.step3": "بيانات الضيف",
    "booking.submit": "تأكيد الحجز",
    "corporate.title": "خدمات الشركات والأعمال",
    "corporate.subtitle": "شريكك المثالي لنجاح أعمالك",
    "corporate.benefits": "مزايا التعاقد معنا",
    "contact.title": "تواصل معنا",
    "contact.subtitle": "نحن هنا لخدمتك على مدار الساعة",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال الرسالة",
    "services.title": "خدماتنا ومرافقنا",
    "services.subtitle": "كل ما تحتاجه لإقامة متكاملة",
    "about.title": "قصتنا",
    "about.vision": "رؤيتنا",
    "about.mission": "رسالتنا"
  },
  en: {
    "nav.home": "Home",
    "nav.rooms": "Rooms & Suites",
    "nav.offers": "🔥 Offers",
    "nav.corporate": "Corporate",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.book": "Book Now",
    "hero.subtitle": "Unforgettable Luxury in 10th of Ramadan",
    "hero.title": "Hana Grand Hotel",
    "hero.checkin": "Check In",
    "hero.checkout": "Check Out",
    "hero.guests": "Guests",
    "hero.search": "Search Rooms",
    "offers.title": "Exclusive Offers",
    "offers.subtitle": "Discover packages tailored just for you",
    "rooms.title": "Our Rooms & Suites",
    "rooms.subtitle": "Design combining absolute comfort and elegance",
    "rooms.night": "per night",
    "rooms.size": "Size",
    "rooms.maxGuests": "Max Guests",
    "footer.desc": "Your premier destination for luxury and comfort in 10th of Ramadan City. Providing exceptional stays.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact Info",
    "footer.rights": "All rights reserved to Hana Grand Hotel",
    "booking.step1": "Select Room",
    "booking.step2": "Stay Details",
    "booking.step3": "Guest Info",
    "booking.submit": "Confirm Booking",
    "corporate.title": "Corporate Services",
    "corporate.subtitle": "Your perfect partner for business success",
    "corporate.benefits": "Partnership Benefits",
    "contact.title": "Contact Us",
    "contact.subtitle": "We are here to serve you 24/7",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "services.title": "Services & Facilities",
    "services.subtitle": "Everything you need for a perfect stay",
    "about.title": "Our Story",
    "about.vision": "Our Vision",
    "about.mission": "Our Mission"
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Language;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("app-lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
