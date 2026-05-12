export const weddingConfig = {
  couple: {
    brideFirstName: 'Sea',
    brideLastName: 'Hutmonineat',
    groomFirstName: 'Huy',
    groomLastName: 'Siveing',
    coupleTitle: 'Huy Siveing & Sea Hutmonineat',
  },
  wedding: {
    date: new Date('2024-12-25').getTime(),
    displayDate: 'December 25, 2024',
    time: '6:00 PM',
    dayOfWeek: 'Saturday',
    message:
      'Together with our parents, we joyfully invite you to celebrate the union of our lives as we exchange our vows and begin our journey as husband and wife.',
  },
  venue: {
    name: 'Sovaneth Hall',
    hallName: 'សន្និសីទថ្នល់ (ថ្នល់ B)',
    location: 'Some Address Here',
    description:
      'Please join us as we celebrate the beginning of our new chapter together with family and friends from around the world.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QvrvZEPGSK87BiQmgkd3fK8UvKOMSi.png',
    time: '6:00 PM',
  },
  schedule: [
    {
      time: '06:00 PM',
      title: 'ម្សាឋា នូវមជ្ឈដ្ឋាន',
      description: 'ផល់ផងដែលឯង ប្រវត្តិនឹងជា',
    },
    {
      time: '08:00 PM',
      title: 'គិតលើគង្វល់ (សម្ពន្ធ)',
      description: 'ប៉ុលនឹងផ្អើល',
    },
  ],
  gallery: {
    images: [
      {
        id: 1,
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hp5xe38SXpAxo7YT1kdf4NJcDrPtlT.png',
        caption: 'Wedding photos gallery',
      },
      {
        id: 2,
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2v3FnUcfe9ASCpPhdNulg00Z5Xsyld.png',
        caption: 'Wedding invitation card',
      },
      {
        id: 3,
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FiUkpvJcGvwOfaF9Pc3KwNlt7WJG8C.png',
        caption: 'Special moment',
      },
    ],
  },
  bankingInfo: {
    brideName: 'Sea Hutmonineat',
    accountNumber: '123456789',
    bankName: 'ABC Bank',
  },
};

export const getInvitationText = (inviterName: string) => {
  return `វិវាហ៍របស់ ${weddingConfig.couple.coupleTitle}\n\nInvite by ${inviterName}`;
};
