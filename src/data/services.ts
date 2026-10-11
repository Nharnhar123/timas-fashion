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
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    category: 'Custom Wear',
  },
  {
    title: 'Fascinators & Headpieces',
    description: 'Elegant fascinators and handcrafted headpieces for weddings, church events, and formal celebrations.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    category: 'Headpieces',
  },
  {
    title: 'Fashion Accessories',
    description: 'Carefully selected accessories that complement outfits and complete a customer’s look.',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    category: 'Accessories',
  },
  {
    title: 'Bridal Fans',
    description: 'Decorative fans suitable for bridal styling, weddings, and special events.',
    image:
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    category: 'Bridal Fans',
  },
  {
    title: 'Quality Stitching',
    description: 'Careful stitching and finishing with attention to garment details and overall appearance.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    category: 'Tailoring',
  },
];
