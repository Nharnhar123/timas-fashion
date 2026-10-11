export type Service = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export const services: Service[] = [
  {
    title: 'Custom Sewing',
    description: 'Custom-made clothing designed around the customer’s measurements, preferences, and occasion.',
    image: '/images/work/custom-gown-purple-front.jpeg',
    category: 'Custom Wear',
  },
  {
    title: 'Fascinators & Headpieces',
    description: 'Elegant fascinators and handcrafted headpieces for weddings, church events, and formal celebrations.',
    image: '/images/work/fascinator-gold-floral.jpeg',
    category: 'Headpieces',
  },
  {
    title: 'Fashion Accessories',
    description: 'Carefully selected accessories that complement outfits and complete a customer’s look.',
    image: '/images/work/bridal-fan-set.jpeg',
    category: 'Accessories',
  },
  {
    title: 'Bridal Fans',
    description: 'Decorative fans suitable for bridal styling, weddings, and special events.',
    image: '/images/work/bridal-fan-orange-bow.jpeg',
    category: 'Bridal Fans',
  },
  {
    title: 'Quality Stitching',
    description: 'Careful stitching and finishing with attention to garment details and overall appearance.',
    image: '/images/work/custom-gown-waist-detail.jpeg',
    category: 'Tailoring',
  },
];
