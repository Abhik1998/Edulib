export interface ICategories {
  name: string;
  icon: string;
  showSubCategories: boolean;
  subCategories: string[];
}

export const CATEGORIES: ICategories[] = [
  {
    name: 'Programming',
    icon: '../assets/images/categories/programming.png',
    showSubCategories: false,
    subCategories: [
      'JavaScript',
      'Java',
      'Python',
      'SQL',
      'Data structure & Algorithms',
      'Architecture',
      'Design Patterns',
      'Networks',
      'Information Systems',
      'Operating systems',
    ],
  },
  {
    name: 'Business',
    icon: '../assets/images/categories/business.png',
    showSubCategories: false,
    subCategories: [
      'Management',
      'Marketing',
      'Accounting',
      'Investing',
      'Markets',
      'Econometrics',
    ],
  },
  {
    name: 'Mathematics',
    icon: '../assets/images/categories/mathematics.png',
    showSubCategories: false,
    subCategories: [
      'Algebra',
      'Linear Algebra',
      'Discrete Mathematics',
      'Number Theory',
      'Analysis',
      'Mathematicsematical Statistics',
  ],
  },
  {
    name: 'Psychology',
    icon: '../assets/images/categories/psychology.png',
    showSubCategories: false,
    subCategories: [
      'Creative Thinking',
      'The art of communication',
    ],
  },
  {
    name: 'Techniques',
    icon: '../assets/images/categories/techniques.png',
    showSubCategories: false,
    subCategories: [
      'Communication',
      'Electronics',
      'Nanotechnology',
    ],
  },
];
