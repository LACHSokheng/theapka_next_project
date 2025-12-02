import { time } from "console";

export type Language = "en" | "km";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    title: "Wedding celebration",
    coupleNames: "Vordin & Sokheng",
    heroSubtitle: "Please be respectfully invited.",
    heroBigText: "On February 28, 2026 at 3:00 PM ",
    heroSmallText:
      "Veal Ampil Village, Triel Commune, Taing Kork District, Kampong Thom Province",
    ourStory: "Our Story",
    storyText:
      "Our journey began in the heart of Cambodia, where our paths crossed and our hearts found their match. Through every moment, we have grown together, supporting and loving each other unconditionally. Today, we are thrilled to share our happiness with everyone we cherish.",
    storyTitle: "A Cambodian Love Story",
    storyDate: "2025",
    eventDetails: "Event Details",
    eventTitle: "Wedding Celebration",
    dateLabel: "Date",
    eventDate: "Saturday, December 28, 2025",
    locationLabel: "Location",
    eventLocation: "Phnom Penh, Cambodia",
    moreInfo: "More Information",
    qrDescription:
      "Scan the QR code to view more details, photos, and to confirm your attendance.",
    qrLabel: "Wedding Website",
    rsvpLabel: "RSVP",
    rsvpTitle: "Please Confirm Your Attendance",
    rsvpConfirmation: "Thank you! Your RSVP has been received.",
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    guestsLabel: "Number of Guests",
    attendingLabel: "Will You Be Attending?",
    yes: "Yes, I will attend",
    no: "No, I cannot attend",
    maybe: "Maybe",
    submit: "Submit RSVP",
    close: "Close",
    totalResponses: "Total Responses",
    footer: "Thank you for celebrating with us",
    allRights: "All rights reserved",
    paymentTitle: "Payment QR Codes",
    paymentSub: "Scan or click on the QR Code to join hands.",
    // Add these inside both "en" and "km" objects
    groomLabel: "Son's name",
    brideLabel: "Daughter's name",
    groomName: "En Vordin",
    brideName: "Lach Sokheng",
    groomParents: "In & Sa Rern",
    brideParents: "Tu Hoy & Vong Thi",
    invitationMessage:
      "Cordially Request The Honor Of Your Presence On The Auspicious Occasion Of The Wedding Of Our Children",
    weddingDateTitle: "Date",
    weddingTimeTitle: "Time",
    weddingDay: "28",
    weddingMonth: "February",
    weddingYear: "2026",
    weddingTime: "7:00 AM",
    weddingLocation:
      "Veal Ampil Village, Triel Commune, Taing Kork District, Kampong Thom Province",

    // CountdownSection "en"
    countdownTitle: "Countdown To The Wedding Day",
    countdownSaveDate: "Save The Date",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownDateText: "Wedding Date",
    calendarTitle: "Mark Your Calendar",

    /*
      Timeline Section "en"
    */

    timelineTitle: "Wedding Day Program",
    timeline1: "Paly Town Ceremony", // 04:00 AM
    timeline1Time: "04:00 AM",
    timeline2: "Peace Ceremony", // 05:00 AM
    timeline2Time: "05:00 AM",
    timeline3: "Meeting with distinguished guests", // 06:30 AM
    timeline3Time: "06:30 AM",
    timeline4: "Palace Ceremony", // 07:00 AM
    timeline4Time: "07:00 AM",
    timeline5: "Ring Ceremony", // 08:00 AM
    timeline5Time: "08:00 AM",
    timeline6: "Reciting the Preah Paritta Mantra", // 09:00 AM
    timeline6Time: "09:00 AM",
    timeline7: "Hair Cutting Ceremony", // 10:00 AM
    timeline7Time: "10:00 AM",
    timeline8: "Khan Sla Ceremony", // 11:00 AM
    timeline8Time: "11:00 AM",
    timeline9: "Bowing and clasping hands", // 12:00 PM
    timeline9Time: "12:00 PM",
    timeline10: "Receiving Guests of Honor with Dinner", // 5:00 PM
    timeline10Time: "05:00 PM",
    timeline11: "Dancing and Entertainment", // 5:30 PM
    timeline11Time: "05:30 PM",
  },
  km: {
    title: "សិរីមង្គលអាពាហ៍ពិពាហ៍",
    coupleNames: "វ័រឌីន និង សុខហេង",
    heroSubtitle: "សូមគោរពអញ្ជើញ",
    heroBigText: "ថ្ងៃទី ២៨ ខែកុម្ភៈ ឆ្នាំ ២០២៦ វេលាម៉ោង ៣:០០ រសៀល",
    heroSmallText: "ភូមិវាលអំពិល ឃុំទ្រៀល ស្រុកតាំងគោក ខេត្តកំពង់ធំ",
    ourStory: "រឿងរបស់យើង",
    storyText:
      "ដំណើរនៃយើងបានចាប់ផ្តើមនៅកណ្តាលប្រទេសកម្ពុជា ដែលយើងបានរកឃើញស្នេហ៍ដ៏ជម្រាលស្មោះស្តាប់។ ក្នុងរៀងរាល់ដង់ យើងបានដកមកកាន់គ្នា ដោយគាំទង់ និងស្នេហ៍ដែលគ្មានលក្ខណ្ឌ។ ថ្ងៃនេះ យើងរីករាយក្នុងការដែលបានកែលម្អកម្លាំងរបស់យើង",
    storyTitle: "ស្នេហ៍កម្ពុជា",
    storyDate: "២០២៥",
    eventDetails: "សម្ភារៈព័ត៌មានស្តីពីព្រឹត្តិការណ៍",
    eventTitle: "ពិធីប្រារព្ធលក្ខណ៍ពិសេស",
    dateLabel: "ថ្ងៃខែឆ្នាំ",
    eventDate: "ថ្ងៃសៅរ៍ ២៨ ធ្នូ ២០២៥",
    locationLabel: "ទីតាំង",
    eventLocation: "ព្នំពេញ ប្រទេសកម្ពុជា",
    moreInfo: "ព័ត៌មានលម្អិត",
    qrDescription: "សូមស្កេន QR កូដដើម្បីមើលព័ត៌មានលម្អិតអំពីទីតាំងកម្មវិធី។",
    qrLabel: "គេហទំព័រលក្ខណ៍ពិសេស",
    rsvpLabel: "RSVP",
    rsvpTitle: "សូមបញ្ជាក់ពីការចូលរួមរបស់លោកអ្នក",
    rsvpConfirmation: "សូមអរគុណ! RSVP របស់លោកអ្នកបានរับឡើង",
    nameLabel: "នាមត្រកូលពេញលេញ",
    namePlaceholder: "ឈ្មោះរបស់អ្នក",
    emailLabel: "សាលដ៌ឈ ប័ណ្ណលេខ",
    phoneLabel: "លេខទូរស័ព្ទ",
    guestsLabel: "ចំនួនអ្នកចូលរួម",
    attendingLabel: "តើលោកអ្នកនឹងចូលរួមឬទេ?",
    yes: "ព្រម ខ្ញុំនឹងចូលរួម",
    no: "ឯតិ ខ្ញុំមិនអាចចូលរួមបានទេ",
    maybe: "ប្រហែលជា",
    submit: "ដាក់ស្នើ RSVP",
    close: "បិទ",
    totalResponses: "ចម្លើយសរុប",
    footer: "សូមអរគុណដែលបានរៀបចំការលើកលម្អរមួយជាមួយយើង",
    allRights: "រក្សាសិទ្ធិ",
    paymentTitle: "ចងដៃតាមរយៈ QR Code",
    paymentSub: "ស្កែន ឬ ចុចលើ QR Code ដើម្បីធ្វើការចងដៃ",
    // Add these inside both "en" and "km" objects

    groomLabel: "កូនប្រុសនាម",
    brideLabel: "កូនស្រីនាម",
    groomName: "អេន វ័រឌីន",
    brideName: "ឡាច សុខហេង",
    groomParents: " អុីន & សា រឿន",
    brideParents: "ទុយ ហយ & វង្ស ធី",
    invitationMessage:
      "ឯកឧត្តម អ្នកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និង ប្រិយមិត្តអញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ប្រសិទ្ធិពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។",
    weddingDateTitle: "ថ្ងៃខែ",
    weddingTimeTitle: "ពេលវេលា",
    weddingDay: "២៨",
    weddingMonth: "កុម្ភៈ",
    weddingYear: "២០២៦",
    weddingTime: "វេលា ៧ ព្រឹក",
    weddingLocation: "ភូមិវាលអំពិល ឃុំទ្រៀល ស្រុកតាំងគោក ខេត្តកំពង់ធំ",

    /*
      CountdownSection "km"

    */
    countdownTitle: "រាប់ថយក្រោយទៅថ្ងៃចូលរោងការ",
    countdownSaveDate: "រក្សាទុកកាលបរិច្ឆេទ",
    countdownDays: "ថ្ងៃ",
    countdownHours: "ម៉ោង",
    countdownMinutes: "នាទី",
    countdownSeconds: "វិនាទី",
    countdownDateText: "ថ្ងៃចូលរោងការ",
    calendarTitle: "រូបភាពប្រតិទិន",

    /*
      Timeline Section "km"
    */
    timelineTitle: "កម្មវិធីថ្ងៃពិធីមង្គលការ",
    timeline1: "ពិធីក្រុងពាលី", // 04:00 AM
    timeline1Time: "04:00 AM",
    timeline2: "ពិធីសំពះពេលា", // 05:00 AM
    timeline2Time: "05:00 AM",
    timeline3: "ជួបជុំភ្ញៀវកិត្តិយសរៀបចំហែជំនួន", // 06:30 AM
    timeline3Time: "06:30 AM",
    timeline4: "ពិធីហែលជំនួន", // 07:00 AM
    timeline4Time: "07:00 AM",
    timeline5: "ពិធីបំពាក់ចិញ្ចៀន", // 08:00 AM
    timeline5Time: "08:00 AM",
    timeline6: "ពិធីសូត្រមន្តចម្រៀនព្រះបរិត្ត", // 09:00 AM
    timeline6Time: "09:00 AM",
    timeline7: "ពិធីកាត់សក់បង្នក់សិរី", // 10:00 AM
    timeline7Time: "10:00 AM",
    timeline8: "ពិធីជាវខាន់ស្លា", // 11:00 AM
    timeline8Time: "11:00 AM",
    timeline9: "ពិធីបង្វិលពពិល សំពះផ្ទឹមសែនចងដៃ", // 12:00 PM
    timeline9Time: "12:00 PM",
    timeline10: "ទទួលភ្ញៀវកិត្តិយសពិសា ភោជន៍អាហារពេលល្ងាច", // 5:00 PM
    timeline10Time: "05:00 PM",
    timeline11: "រាំរលេងកម្សាន្ត", // 5:30 PM
    timeline11Time: "06:30 PM",
  },
};
