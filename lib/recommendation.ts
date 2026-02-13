import { OUTFIT_DB, OutfitItem, WEATHER_MOCK } from './data';

interface RecommendationRequest {
    situation: string;
    mood: string;
}

interface RecommendationResult {
    weather: { temp: number; condition: string; humidity: number };
    outfit: {
        top: string;
        bottom: string;
        outer: string;
        shoes: string;
        socks: string;
        earrings: string;
        nail: string;
    };
    price: {
        total: number;
        details: string;
    };
    message: string;
}

function getRandomItem(items: OutfitItem[]): OutfitItem | null {
    if (items.length === 0) return null;
    return items[Math.floor(Math.random() * items.length)];
}

export function generateRecommendation(req: RecommendationRequest): RecommendationResult {
    // 1. Determine Weather (Randomly for MVP)
    const weathers = Object.values(WEATHER_MOCK);
    const weather = weathers[Math.floor(Math.random() * weathers.length)];

    // 2. Filter Items Logic (Simplified for MVP)
    // In a real app, we would match tags against situation, mood, and weather.

    let tops = OUTFIT_DB.filter(i => i.category === 'top');
    let bottoms = OUTFIT_DB.filter(i => i.category === 'bottom');
    let outers = OUTFIT_DB.filter(i => i.category === 'outer');
    let shoes = OUTFIT_DB.filter(i => i.category === 'shoes');
    let accs = OUTFIT_DB.filter(i => i.category === 'acc');
    let nails = OUTFIT_DB.filter(i => i.category === 'nail');

    // Simple rule based on weather
    if (weather.temp > 20) {
        outers = []; // No outer needed
    } else if (weather.temp < 10) {
        tops = tops.filter(t => t.tags.includes('cold') || !t.tags.includes('hot'));
    }

    const selectedTop = getRandomItem(tops) || tops[0];
    const selectedBottom = getRandomItem(bottoms) || bottoms[0];
    const selectedOuter = outers.length > 0 ? getRandomItem(outers) : null;
    const selectedShoes = getRandomItem(shoes) || shoes[0];
    const selectedAcc = getRandomItem(accs) || accs[0];
    const selectedNail = getRandomItem(nails) || nails[0];

    // 3. Calculate Price
    let totalPrice = (selectedTop?.price || 0) + (selectedBottom?.price || 0) + (selectedOuter?.price || 0) + (selectedShoes?.price || 0) + (selectedAcc?.price || 0);

    // 4. Construct Result
    return {
        weather,
        outfit: {
            top: selectedTop?.name || "T-Shirt",
            bottom: selectedBottom?.name || "Jeans",
            outer: selectedOuter ? selectedOuter.name : "None",
            shoes: selectedShoes?.name || "Sneakers",
            socks: weather.temp < 15 ? "Warm Wool Socks" : "Invisible Socks",
            earrings: selectedAcc?.name || "None",
            nail: selectedNail?.name || "Clean",
        },
        price: {
            total: totalPrice,
            details: `Top: ${(selectedTop?.price || 0) / 1000}k, Btm: ${(selectedBottom?.price || 0) / 1000}k, Shoes: ${(selectedShoes?.price || 0) / 1000}k`
        },
        message: generateMessage(req.situation, req.mood)
    };
}

function generateMessage(situation: string, mood: string): string {
    const messages: { [key: string]: string } = {
        campus_meeting: "A lovely look for your campus life! 🏫",
        work_office: "Professional yet chic for the office. 💼",
        funeral: "Respectful and calm attire. 🖤",
        church: "Modest and graceful for Sunday. ⛪",
        friends: "Trendy and comfortable for hanging out! ☕",
        formal_event: "Elegant vibes for the special occasion. ✨",
        cafe: "Cozy vibes for a study session. 📖"
    };
    return messages[situation] || "Your perfect OOTD for today!";
}
