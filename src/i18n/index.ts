import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        impact: "Impact",
        gallery: "Gallery",
        contact: "Contact",
        getHelp: "Get Help Now",
        orgName: "Women Support NGO",
        location: "Surat | Pan India"
      },
      // Hero Section
      hero: {
        title1: "Supporting Every Girl,",
        title2: "Protecting Every Woman",
        subtitle: "From mental harassment to divorce support, from justice to marriage help — we stand with women of all ages, across India.",
        orgFull: "Women Support & Empowerment NGO – Surat (Pan India)",
        under: "Under: Human Rights Jan Kalyan Jan Seva Mandal",
        president: "Mahila President: Sultana Hanif Malek",
        getHelp: "Get Help Now",
        contact: "Contact Us",
        donate: "Donate / Support",
        keywords: {
          justice: "Justice",
          care: "Care",
          protection: "Protection",
          empowerment: "Empowerment",
          hope: "Hope",
          dignity: "Dignity"
        }
      },
      // About Section
      about: {
        title: "Who We Are",
        description1: "We are a women-focused NGO based in Surat, working across India under",
        organization: "Human Rights Jan Kalyan Jan Seva Mandal",
        description2: "We support girls and women facing divorce, mental harassment, domestic problems, and social injustice.",
        description3: "We also help poor girls with marriage support.",
        ageBarrier: "Age is never a barrier — if a woman needs help, we are here.",
        vision: "Our Vision",
        visionText: "A society where every woman feels safe, empowered, and supported. Where justice is accessible, dignity is preserved, and hope never fades.",
        womenHelped: "Women Helped",
        statesCovered: "States Covered",
        mission: {
          protection: "Protection from harassment and abuse",
          legal: "Legal support and guidance",
          marriage: "Marriage support for underprivileged girls",
          counseling: "Emotional counseling and care",
          empowerment: "Pan-India women empowerment"
        }
      },
      // Services
      services: {
        title: "Our Services",
        subtitle: "Comprehensive support services designed to empower, protect, and uplift women across all walks of life.",
        divorce: {
          title: "Divorce & Family Dispute Support",
          description: "Legal guidance and emotional support for women going through divorce and family conflicts."
        },
        harassment: {
          title: "Mental Harassment & Abuse Help",
          description: "Immediate support and protection for women facing mental, emotional, or physical abuse."
        },
        rights: {
          title: "Women Rights Guidance",
          description: "Education and advocacy about women's legal rights and how to exercise them effectively."
        },
        counseling: {
          title: "Emotional & Counseling Support",
          description: "Professional counseling services to help women heal and rebuild their confidence."
        },
        marriage: {
          title: "Marriage Help for Poor Girls",
          description: "Financial and social support to help underprivileged girls with marriage arrangements."
        },
        emergency: {
          title: "Emergency Support & Guidance",
          description: "24/7 emergency helpline and immediate assistance for women in crisis situations."
        },
        needHelp: "Need Immediate Help?",
        needHelpText: "Don't wait. Reach out to us now for confidential support and guidance.",
        emergencyCall: "Emergency Call"
      },
      // Contact
      contact: {
        title: "Get Help & Support",
        subtitle: "Reach out to us confidentially. Every conversation is private, every concern is valid, and every woman deserves support.",
        formTitle: "Share Your Concern",
        formSubtitle: "All information is kept strictly confidential. We're here to listen and help.",
        name: "Your Name",
        city: "City",
        phone: "Phone Number",
        description: "Describe Your Situation",
        descriptionPlaceholder: "Please describe your situation. The more details you provide, the better we can help you.",
        send: "Send Message",
        sending: "Sending...",
        privacy: "Your privacy is our priority. All communications are confidential and secure.",
        emergency: "Emergency Help",
        emergencyText: "If you're in immediate danger, please call:",
        police: "Police: 100",
        womenHelpline: "Women Helpline: 1091",
        whatsapp: "WhatsApp Support",
        whatsappText: "Chat with us privately on WhatsApp for immediate support.",
        chatWhatsapp: "Chat on WhatsApp",
        office: "Office Contact",
        email: "Email Support",
        helpline: "24/7 Helpline",
        supportHours: "Support Hours",
        emergency24: "24/7 Available",
        generalSupport: "9 AM - 9 PM",
        counselingAppt: "By Appointment",
        notAlone: "Remember: You Are Not Alone",
        notAloneText: "Every step towards seeking help is a step towards healing. We believe in your strength and are here to support your journey."
      },
      // Common
      common: {
        loading: "Loading...",
        fillAllFields: "Please fill in all fields",
        messageSent: "Your message has been sent. We will contact you soon.",
        messageFailed: "Failed to send message. Please try again."
      }
    }
  },
  gu: {
    translation: {
      // Navigation
      nav: {
        home: "મુખ્ય",
        about: "અમારા વિશે",
        services: "સેવાઓ",
        impact: "અસર",
        gallery: "ગેલેરી",
        contact: "સંપર્ક",
        getHelp: "હવે મદદ મેળવો",
        orgName: "મહિલા સહાય એનજીઓ",
        location: "સુરત | સમગ્ર ભારત"
      },
      // Hero Section
      hero: {
        title1: "દરેક છોકરીને સહાય,",
        title2: "દરેક મહિલાનું રક્ષણ",
        subtitle: "માનસિક પીડાથી લઈને છૂટાછેડાની સહાય સુધી, ન્યાયથી લઈને લગ્નની મદદ સુધી — અમે સમગ્ર ભારતમાં તમામ ઉંમરની મહિલાઓ સાથે છીએ.",
        orgFull: "મહિલા સહાય અને સશક્તિકરણ એનજીઓ – સુરત (સમગ્ર ભારત)",
        under: "હેઠળ: માનવ અધિકાર જન કલ્યાણ જન સેવા મંડળ",
        president: "મહિલા પ્રમુખ: સુલતાના હનીફ માલેક",
        getHelp: "હવે મદદ મેળવો",
        contact: "અમારો સંપર્ક કરો",
        donate: "દાન / સહાય",
        keywords: {
          justice: "ન્યાય",
          care: "સંભાળ",
          protection: "રક્ષણ",
          empowerment: "સશક્તિકરણ",
          hope: "આશા",
          dignity: "ગૌરવ"
        }
      },
      // About Section
      about: {
        title: "અમે કોણ છીએ",
        description1: "અમે સુરતમાં સ્થિત મહિલા-કેન્દ્રિત એનજીઓ છીએ, જે સમગ્ર ભારતમાં કામ કરે છે",
        organization: "માનવ અધિકાર જન કલ્યાણ જન સેવા મંડળ",
        description2: "અમે છૂટાછેડા, માનસિક પીડા, ઘરેલું સમસ્યાઓ અને સામાજિક અન્યાયનો સામનો કરતી છોકરીઓ અને મહિલાઓને સહાય કરીએ છીએ.",
        description3: "અમે ગરીબ છોકરીઓને લગ્નની સહાય પણ કરીએ છીએ.",
        ageBarrier: "ઉંમર ક્યારેય અવરોધ નથી — જો કોઈ મહિલાને મદદની જરૂર હોય, તો અમે અહીં છીએ.",
        vision: "અમારું દ્રષ્ટિકોણ",
        visionText: "એક એવો સમાજ જ્યાં દરેક મહિલા સુરક્ષિત, સશક્ત અને સહાયિત અનુભવે. જ્યાં ન્યાય સુલભ હોય, ગૌરવ સાચવાય અને આશા ક્યારેય ન મરે.",
        womenHelped: "મહિલાઓને મદદ",
        statesCovered: "રાજ્યો આવરી લીધા",
        mission: {
          protection: "પીડા અને દુર્વ્યવહારથી રક્ષણ",
          legal: "કાનૂની સહાય અને માર્ગદર્શન",
          marriage: "વંચિત છોકરીઓ માટે લગ્નની સહાય",
          counseling: "ભાવનાત્મક પરામર્શ અને સંભાળ",
          empowerment: "સમગ્ર ભારતમાં મહિલા સશક્તિકરણ"
        }
      },
      // Services
      services: {
        title: "અમારી સેવાઓ",
        subtitle: "જીવનના તમામ ક્ષેત્રોમાં મહિલાઓને સશક્ત, સુરક્ષિત અને ઉન્નત બનાવવા માટે રચાયેલી વ્યાપક સહાય સેવાઓ.",
        divorce: {
          title: "છૂટાછેડા અને કૌટુંબિક વિવાદ સહાય",
          description: "છૂટાછેડા અને કૌટુંબિક સંઘર્ષોમાંથી પસાર થતી મહિલાઓ માટે કાનૂની માર્ગદર્શન અને ભાવનાત્મક સહાય."
        },
        harassment: {
          title: "માનસિક પીડા અને દુર્વ્યવહાર મદદ",
          description: "માનસિક, ભાવનાત્મક અથવા શારીરિક દુર્વ્યવહારનો સામનો કરતી મહિલાઓ માટે તાત્કાલિક સહાય અને રક્ષણ."
        },
        rights: {
          title: "મહિલા અધિકાર માર્ગદર્શન",
          description: "મહિલાઓના કાનૂની અધિકારો અને તેનો અસરકારક ઉપયોગ કેવી રીતે કરવો તે વિશે શિક્ષણ અને હિમાયત."
        },
        counseling: {
          title: "ભાવનાત્મક અને પરામર્શ સહાય",
          description: "મહિલાઓને સાજા થવામાં અને તેમનો આત્મવિશ્વાસ પુનઃનિર્માણ કરવામાં મદદ કરવા માટે વ્યાવસાયિક પરામર્શ સેવાઓ."
        },
        marriage: {
          title: "ગરીબ છોકરીઓ માટે લગ્નની મદદ",
          description: "વંચિત છોકરીઓને લગ્નની વ્યવસ્થામાં મદદ કરવા માટે આર્થિક અને સામાજિક સહાય."
        },
        emergency: {
          title: "કટોકટી સહાય અને માર્ગદર્શન",
          description: "કટોકટીની પરિસ્થિતિમાં મહિલાઓ માટે 24/7 કટોકટી હેલ્પલાઇન અને તાત્કાલિક સહાય."
        },
        needHelp: "તાત્કાલિક મદદની જરૂર છે?",
        needHelpText: "રાહ ન જુઓ. ગુપ્ત સહાય અને માર્ગદર્શન માટે હવે અમારો સંપર્ક કરો.",
        emergencyCall: "કટોકટી કૉલ"
      },
      // Contact
      contact: {
        title: "મદદ અને સહાય મેળવો",
        subtitle: "ગુપ્ત રીતે અમારો સંપર્ક કરો. દરેક વાતચીત ખાનગી છે, દરેક ચિંતા માન્ય છે, અને દરેક મહિલા સહાયની હકદાર છે.",
        formTitle: "તમારી ચિંતા શેર કરો",
        formSubtitle: "તમામ માહિતી સખત ગુપ્ત રાખવામાં આવે છે. અમે સાંભળવા અને મદદ કરવા માટે અહીં છીએ.",
        name: "તમારું નામ",
        city: "શહેર",
        phone: "ફોન નંબર",
        description: "તમારી પરિસ્થિતિનું વર્ણન કરો",
        descriptionPlaceholder: "કૃપા કરીને તમારી પરિસ્થિતિનું વર્ણન કરો. તમે જેટલી વધુ વિગતો આપશો, અમે તેટલી સારી રીતે તમારી મદદ કરી શકીશું.",
        send: "સંદેશ મોકલો",
        sending: "મોકલી રહ્યા છીએ...",
        privacy: "તમારી ગોપનીયતા અમારી પ્રાથમિકતા છે. તમામ સંદેશાવ્યવહાર ગુપ્ત અને સુરક્ષિત છે.",
        emergency: "કટોકટી મદદ",
        emergencyText: "જો તમે તાત્કાલિક જોખમમાં છો, તો કૃપા કરીને કૉલ કરો:",
        police: "પોલીસ: 100",
        womenHelpline: "મહિલા હેલ્પલાઇન: 1091",
        whatsapp: "વ્હોટ્સએપ સહાય",
        whatsappText: "તાત્કાલિક સહાય માટે વ્હોટ્સએપ પર અમારી સાથે ખાનગી ચેટ કરો.",
        chatWhatsapp: "વ્હોટ્સએપ પર ચેટ કરો",
        office: "ઓફિસ સંપર્ક",
        email: "ઇમેઇલ સહાય",
        helpline: "24/7 હેલ્પલાઇન",
        supportHours: "સહાય સમય",
        emergency24: "24/7 ઉપલબ્ધ",
        generalSupport: "સવારે 9 થી રાત્રે 9",
        counselingAppt: "એપોઇન્ટમેન્ટ દ્વારા",
        notAlone: "યાદ રાખો: તમે એકલા નથી",
        notAloneText: "મદદ માંગવા તરફનું દરેક પગલું સાજા થવા તરફનું પગલું છે. અમે તમારી શક્તિમાં વિશ્વાસ રાખીએ છીએ અને તમારી યાત્રામાં સહાય કરવા માટે અહીં છીએ."
      },
      // Common
      common: {
        loading: "લોડ થઈ રહ્યું છે...",
        fillAllFields: "કૃપા કરીને તમામ ફીલ્ડ ભરો",
        messageSent: "તમારો સંદેશ મોકલાયો છે. અમે તમારો જલ્દી સંપર્ક કરીશું.",
        messageFailed: "સંદેશ મોકલવામાં નિષ્ફળ. કૃપા કરીને ફરીથી પ્રયાસ કરો."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
