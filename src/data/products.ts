export type Product = {
  id: string;
  name: string;
  category: 'Custom Wear' | 'Headpieces' | 'Accessories' | 'Bridal Fans';
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 'custom-dress-1',
    name: 'Classic African Print Gown',
    category: 'Custom Wear',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant custom gown with tailored structure and refined fabric detail.',
  },
  {
    id: 'headpiece-1',
    name: 'Golden Royal Fascinator',
    category: 'Headpieces',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description: 'Statement headpiece with luxe finish and handcrafted embellishment.',
  },
  {
    id: 'accessory-1',
    name: 'Signature Evening Bag',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    description: 'A polished accessory designed to complete a refined fashion look.',
  },
  {
    id: 'bridal-fan-1',
    name: 'Champagne Bridal Fan',
    category: 'Bridal Fans',
    image:
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'Bridal fan in soft metallic tones for a graceful ceremony finish.',
  },
  {
    id: 'custom-dress-2',
    name: 'Tailored Event Ensemble',
    category: 'Custom Wear',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description: 'Modern fit wedding or occasion ensemble featuring polished tailoring.',
  },
  {
    id: 'accessory-2',
    name: 'Luxury Styling Set',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    description: 'An elegant set of coordinated finishing pieces to elevate formal wear.',
  },
];
