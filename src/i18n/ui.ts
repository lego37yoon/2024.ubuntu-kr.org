export const languages = {
    en: 'English',
    ko: '한국어',
  };
  
  export const defaultLang = 'ko';
  
  export const ui: Record<string, Record<string, string>> = {
    en:{
      'event.edition': 'UbuCon Korea 2nd Edition',
      'event.theme': 'Deploy with Ubuntu',
      'event.date': 'August 10th, 2024',
      'event.venue': 'Microsoft Korea (13F)',
      'home.tagline': 'The second edition of UbuCon Korea to be held at Microsoft Korea which is the same venue as last year on August 10th. Various sessions will be prepared with theme "Deploy with Ubuntu"!',
      'home.venuetbd': '*Dates and venue to be confirmed soon.',
      'home.about': 'About the event',
      'home.cfp': 'Submit proposals',
      'home.tickets': 'Buy Tickets',
      'home.sponsor': 'Interested to sponsor us?',
      'feed.title': 'News from our forum',
      'feed.more': 'View more news on forum',
      'footer.policy': 'Privacy Policy',
      'footer.contact': 'Contact us with Email',
      'footer.srcrepo': 'See source code',
      'footer.otherevents': 'Other events of Ubuntu Korea',
      'cityBanner.title': 'Let\'s meet at Microsoft Korea near Gwanghwamoon Gate!',
      'cityBanner.description': 'Learn how to get to the venue, Available facilities and our event floor plan',
      'featured.title': 'Featured Speakers',
      'featured.more': 'See all sessions',
      'nav.venue': 'Venue & Safety',
      'nav.about': 'About',
      'nav.programs': 'Programs',
      'nav.cfp': 'Call for proposals',
      'nav.schedules': 'Schedules (TBD)',
      'nav.socialevents': 'Conference Dinner',
      'nav.ksp': 'OpenPGP Keysigning Party',
      'nav.sponsors': 'Sponsors/Patrons',
      'nav.sponsors.join': 'Become a sponsor',
      'nav.sponsors.list': 'Our sponsors',
      'sponsor.about': 'About the sponsor',
      'sponsor.website': 'Visit website',
    },
    ko: {
      'event.edition': '두번째 UbuCon Korea',
      'event.theme': '우분투와 함께 배포하기',
      'event.date': '2024년 8월 10일',
      'event.venue': '한국마이크로소프트 (13층)',
      'home.tagline': '두번째 UbuCon Korea는 작년과 동일한 장소인 한국마이크로소프트에서 8월 10일에 개최될 예정입니다. "Deploy with Ubuntu"를 테마로 다양한 세션을 준비하고 있습니다.',
      'home.venuetbd': '*장소 및 날짜 추후 확정 예정.',
      'home.about': '행사 소개',
      'home.cfp': '발표 제안',
      'home.tickets': '티켓 구매',
      'home.sponsor': '후원 문의',
      'feed.title': '포럼 소식',
      'feed.more': '포럼에서 더 보기',
      'footer.policy': '개인정보 처리방침',
      'footer.contact': '이메일로 연락하기',
      'footer.srcrepo': '소스코드 확인',
      'footer.otherevents': '우분투한국커뮤니티의 다른 행사',
      'cityBanner.title': '광화문 근처에 위치한 한국마이크로소프트에서 만나요!',
      'cityBanner.description': '행사장 오시는 길, 내부 이용 가능 시설 및 행사 당일 행사장 구성 등에 대해 알아보세요',
      'featured.title': '주요 연사',
      'featured.more': '모든 세션 보기',
      'nav.venue': '행사장 & 안전정보',
      'nav.about': '소개',
      'nav.programs': '프로그램',
      'nav.cfp': '제안서 모집',
      'nav.schedules': '시간표 (미정)',
      'nav.socialevents': '컨퍼런스 만찬',
      'nav.ksp': 'OpenPGP 키사이닝 파티',
      'nav.sponsors': '후원사/개인후원',
      'nav.sponsors.join': '후원사 등록 안내',
      'nav.sponsors.list': '참여 후원사',
      'sponsor.about': '후원사 소개',
      'sponsor.website': '웹사이트 방문'
    },
  } as const;