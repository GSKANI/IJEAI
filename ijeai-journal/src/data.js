// Default journal data — reads from localStorage if admin has saved
export const DEFAULT_DATA = {
  issn: 'XXXX-XXXX',
  heroLabel: 'Volume 1 · Issue 1 · January 2026',
  heroH1: 'Advancing Knowledge Across',
  heroH2: 'Engineering, Arts and Innovation',
  heroDesc: 'A peer-reviewed open access journal dedicated to interdisciplinary research that bridges technology, creativity, and human ingenuity.',
  publisher: 'Sead',
  email: 'editor@sead.com',
  website: 'sead.in',
  country: 'India',
  address: 'Chennai, Tamil Nadu, India',
  issueVol: 'Volume 1',
  issueNum: 'Issue 1',
  issuePeriod: 'January – March 2026',
  papers: [
    {
      id: 1, num: '01',
      title: 'AI in Smart Cities: Challenges, Opportunities and Future Directions',
      authors: 'Arun Sharma, Priya Nair, Vijay Menon',
      area: 'Artificial Intelligence',
      pages: '1–14',
      tags: ['Artificial Intelligence', 'Smart Cities', 'IoT'],
      abstract: 'This paper examines the integration of AI systems into smart city infrastructure, analyzing challenges in data governance, algorithmic bias, and scalability across urban deployments.',
      date: '2026-01-14',
    },
    {
      id: 2, num: '02',
      title: 'Innovation in Digital Arts: Emerging Aesthetics in Generative Media',
      authors: 'Sofia Ramírez, James Okafor',
      area: 'Arts & Humanities',
      pages: '15–26',
      tags: ['Digital Arts', 'Generative AI', 'Media'],
      abstract: 'This study explores aesthetic dimensions of generative AI-produced art, investigating how machine-generated media challenges traditional notions of authorship and creative expression.',
      date: '2026-01-20',
    },
    {
      id: 3, num: '03',
      title: 'Machine Learning Applications in Structural Engineering: A Systematic Review',
      authors: 'Dr. R. Krishnamurthy, Leila Ahmadi',
      area: 'Engineering Sciences',
      pages: '27–41',
      tags: ['Machine Learning', 'Civil Engineering', 'Review'],
      abstract: 'A systematic review of 78 studies examining ML techniques applied to structural health monitoring, load prediction, and failure analysis in civil engineering contexts.',
      date: '2026-01-28',
    },
  ],
  board: [
    { id: 1, initials: 'JS', name: 'Dr. John Smith',        role: 'Editor-in-Chief',  institution: 'MIT',                    country: 'United States' },
    { id: 2, initials: 'RK', name: 'Dr. Ravi Kumar',        role: 'Associate Editor', institution: 'IIT Madras',             country: 'India'         },
    { id: 3, initials: 'ML', name: 'Dr. Maria Lopez',       role: 'Associate Editor', institution: 'UPC Catalunya',          country: 'Spain'         },
    { id: 4, initials: 'TN', name: 'Prof. Tanaka Noriyuki', role: 'Board Member',     institution: 'University of Tokyo',    country: 'Japan'         },
    { id: 5, initials: 'AS', name: 'Dr. Amira Siddiqui',   role: 'Board Member',     institution: 'University College London', country: 'United Kingdom' },
    { id: 6, initials: 'FO', name: 'Dr. Fatima Oyelaran',  role: 'Board Member',     institution: 'University of Lagos',    country: 'Nigeria'       },
    { id: 7, initials: 'KP', name: 'Dr. Kavitha Pillai',   role: 'Board Member',     institution: 'AIIMS New Delhi',        country: 'India'         },
    { id: 8, initials: 'DM', name: 'Dr. David Müller',     role: 'Board Member',     institution: 'TU Berlin',              country: 'Germany'       },
    { id: 9, initials: 'NA', name: 'Dr. Nadia Al-Rashid',  role: 'Board Member',     institution: 'KAUST',                  country: 'Saudi Arabia'  },
  ],
};

export function loadData() {
  try {
    const stored = localStorage.getItem('ijeai_data');
    return stored ? JSON.parse(stored) : DEFAULT_DATA;
  } catch {
    return DEFAULT_DATA;
  }
}
