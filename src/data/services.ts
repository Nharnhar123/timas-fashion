export type Service = {
  title: string;
  description: string;
  category: string;
};

export const services: Service[] = [
  {
    title: 'Custom Sewing',
    description: 'Custom-made clothing designed around the customer’s measurements, preferences, and occasion.',
    category: 'Custom Wear',
  },
  {
    title: 'Fascinators & Headpieces',
    description: 'Elegant fascinators and handcrafted headpieces for weddings, church events, and formal celebrations.',
    category: 'Headpieces',
  },
  {
    title: 'Fashion Accessories',
    description: 'Carefully selected accessories that complement outfits and complete a customer’s look.',
    category: 'Accessories',
  },
  {
    title: 'Bridal Fans',
    description: 'Decorative fans suitable for bridal styling, weddings, and special events.',
    category: 'Bridal Fans',
  },
  {
    title: 'Quality Stitching',
    description: 'Careful stitching and finishing with attention to garment details and overall appearance.',
    category: 'Tailoring',
  },
];
