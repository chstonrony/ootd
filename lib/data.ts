// Mock Data for MVP

export interface OutfitItem {
    id: string;
    name: string;
    category: 'top' | 'bottom' | 'outer' | 'shoes' | 'socks' | 'acc' | 'nail';
    price: number; // in KRW
    tags: string[]; // e.g., 'casual', 'formal', 'sunny', 'rainy', 'hot', 'cold'
}

export const OUTFIT_DB: OutfitItem[] = [
    // Tops
    { id: 't1', name: 'Oversized White Shirt', category: 'top', price: 45000, tags: ['casual', 'formal', 'sunny', 'cloudy'] },
    { id: 't2', name: 'Black Turtleneck', category: 'top', price: 35000, tags: ['casual', 'formal', 'cold'] },
    { id: 't3', name: 'Pastel Blue Blouse', category: 'top', price: 52000, tags: ['formal', 'date', 'sunny'] },
    { id: 't4', name: 'Graphic Tee', category: 'top', price: 29000, tags: ['casual', 'friends', 'hot'] },
    { id: 't5', name: 'Chunky Knit Sweater', category: 'top', price: 68000, tags: ['casual', 'cold'] },

    // Bottoms
    { id: 'b1', name: 'Wide-leg Beige Slacks', category: 'bottom', price: 55000, tags: ['casual', 'formal', 'sunny', 'cloudy'] },
    { id: 'b2', name: 'Straight Denim Jeans', category: 'bottom', price: 49000, tags: ['casual', 'friends', 'sunny', 'cloudy'] },
    { id: 'b3', name: 'Black  Pencil Skirt', category: 'bottom', price: 42000, tags: ['formal', 'office', 'cloudy'] },
    { id: 'b4', name: 'Linen Shorts', category: 'bottom', price: 35000, tags: ['casual', 'hot', 'sunny'] },

    // Outers
    { id: 'o1', name: 'Beige Trench Coat', category: 'outer', price: 129000, tags: ['formal', 'casual', 'cloudy', 'windy'] },
    { id: 'o2', name: 'Black Leather Jacket', category: 'outer', price: 89000, tags: ['casual', 'night', 'cool'] },
    { id: 'o3', name: 'Denim Jacket', category: 'outer', price: 65000, tags: ['casual', 'sunny', 'cool'] },
    { id: 'o4', name: 'Cardigan', category: 'outer', price: 45000, tags: ['casual', 'office', 'cool'] },

    // Shoes
    { id: 's1', name: 'White Sneakers', category: 'shoes', price: 120000, tags: ['casual', 'campus', 'sunny'] },
    { id: 's2', name: 'Black Loafers', category: 'shoes', price: 89000, tags: ['formal', 'office', 'cloudy'] },
    { id: 's3', name: 'Ankle Boots', category: 'shoes', price: 95000, tags: ['casual', 'date', 'cool'] },
    { id: 's4', name: 'Strappy Sandals', category: 'shoes', price: 45000, tags: ['casual', 'hot', 'sunny'] },

    // Accessories
    { id: 'a1', name: 'Silver Hoops', category: 'acc', price: 15000, tags: ['casual', 'cool'] },
    { id: 'a2', name: 'Pearl Necklace', category: 'acc', price: 35000, tags: ['formal', 'date'] },
    { id: 'a3', name: 'Minimalist Watch', category: 'acc', price: 120000, tags: ['office', 'campus'] },

    // Nails
    { id: 'n1', name: 'Nude / Clear Coat', category: 'nail', price: 0, tags: ['casual', 'office', 'clean'] },
    { id: 'n2', name: 'Classic Red', category: 'nail', price: 15000, tags: ['date', 'formal'] },
    { id: 'n3', name: 'Pastel French', category: 'nail', price: 25000, tags: ['spring', 'campus'] },
];

export const WEATHER_MOCK = {
    sunny: { temp: 24, condition: "Sunny", humidity: 40 },
    cloudy: { temp: 18, condition: "Cloudy", humidity: 60 },
    rainy: { temp: 15, condition: "Rainy", humidity: 80 },
    cold: { temp: 5, condition: "Clear", humidity: 30 },
};
