export const weddingConfig = {
  couple: {
    groomName: 'Huy Siveing',
    brideName: 'Sea Hutmonineat',
    coupleTitle: 'Huy Siveing & Sea Hutmonineat',
  },
  weddingDate: {
    date: 'December 25, 2024',
    time: '6:00 PM',
    dayOfWeek: 'Saturday',
    countdownTo: new Date('2024-12-25').getTime(),
  },
  venue: {
    name: 'Sovaneth Hall',
    hallName: 'សន្និសីទថ្នល់ (ថ្នល់ B)',
    address: 'Some Address Here',
    description:
      'Please join us as we celebrate the beginning of our new chapter together with family and friends from around the world.',
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
  couple_photos: [
    {
      id: 1,
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zTBqkUf4wMi0cAhicBVCZHULbOeA2y.png',
      alt: 'Couple in red traditional attire',
    },
  ],
  gallery_photos: [
    {
      id: 1,
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hp5xe38SXpAxo7YT1kdf4NJcDrPtlT.png',
      alt: 'Wedding photos gallery',
    },
  ],
  invitationMessage:
    'Together with our parents, we joyfully invite you to celebrate the union of our lives as we exchange our vows and begin our journey as husband and wife.',
  bankingInfo: {
    brideName: 'Sea Hutmonineat',
    accountNumber: '123456789',
    bankName: 'ABC Bank',
  },
};

export const getInvitationText = (inviterName: string) => {
  return `វិវាហ៍របស់ ${weddingConfig.couple.coupleTitle}\n\nInvite by ${inviterName}`;
};
