export type Product = {
  id: string;
  name: string;
  category: 'Custom Wear' | 'Headpieces' | 'Accessories' | 'Bridal Fans';
  description: string;
};

export const products: Product[] = [
  {
    id: 'custom-dress-1',
    name: 'Classic African Print Gown',
    category: 'Custom Wear',
    description: 'Elegant custom gown with tailored structure and refined fabric detail.',
  },
  {
    id: 'headpiece-1',
    name: 'Golden Royal Fascinator',
    category: 'Headpieces',
    description: 'Statement headpiece with luxe finish and handcrafted embellishment.',
  },
  {
    id: 'accessory-1',
    name: 'Signature Evening Bag',
    category: 'Accessories',
    description: 'A polished accessory designed to complete a refined fashion look.',
  },
  {
    id: 'bridal-fan-1',
    name: 'Champagne Bridal Fan',
    category: 'Bridal Fans',
    description: 'Bridal fan in soft metallic tones for a graceful ceremony finish.',
  },
  {
    id: 'custom-dress-2',
    name: 'Tailored Event Ensemble',
    category: 'Custom Wear',
    description: 'Modern fit wedding or occasion ensemble featuring polished tailoring.',
  },
  {
    id: 'accessory-2',
    name: 'Luxury Styling Set',
    category: 'Accessories',
    description: 'An elegant set of coordinated finishing pieces to elevate formal wear.',
  },
];
