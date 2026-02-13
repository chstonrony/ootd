"use client";

import React, { useState } from "react";
import { OOTDForm } from "@/components/OOTDForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateRecommendation } from "@/lib/recommendation";
import {
    CloudSun,
    Thermometer,
    Droplets,
    Shirt,
    Footprints,
    Sparkles,
    Palette,
    RotateCcw,
    DollarSign
} from "lucide-react";

export default function Home() {
    const [recommendation, setRecommendation] = useState<any>(null);

    const handleFormSubmit = (data: { situation: string; mood: string }) => {
        // In a real app, this might be an async API call
        // For MVP with Edge Runtime, we can import logic directly or via API route
        // Using direct import for simplicity and speed in this MVP
        const result = generateRecommendation(data);
        setRecommendation(result);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">

            {!recommendation ? (
                <OOTDForm onSubmit={handleFormSubmit} />
            ) : (
                <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="bg-white/95 backdrop-blur shadow-xl border-none overflow-hidden">
                        <CardHeader className="bg-zinc-950 text-white p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Sparkles size={100} />
                            </div>
                            <CardTitle className="text-xl font-light tracking-wide text-center uppercase z-10">Your OOTD</CardTitle>
                            <div className="flex justify-center items-center gap-4 text-xs mt-3 text-gray-300 z-10">
                                <span className="flex items-center gap-1"><Thermometer size={14} /> {recommendation.weather.temp}°C</span>
                                <span className="flex items-center gap-1"><CloudSun size={14} /> {recommendation.weather.condition}</span>
                                <span className="flex items-center gap-1"><Droplets size={14} /> {recommendation.weather.humidity}%</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-4">
                                <Section title="Main Fit" icon={<Shirt size={16} />}>
                                    <Item label="Top" value={recommendation.outfit.top} />
                                    <Item label="Bottom" value={recommendation.outfit.bottom} />
                                    <Item label="Outer" value={recommendation.outfit.outer} />
                                </Section>

                                <Section title="Shoes & Acc" icon={<Footprints size={16} />}>
                                    <Item label="Shoes" value={recommendation.outfit.shoes} />
                                    <Item label="Socks" value={recommendation.outfit.socks} />
                                    <Item label="Earrings" value={recommendation.outfit.earrings} />
                                    <Item label="Nail" value={recommendation.outfit.nail} />
                                </Section>

                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-semibold text-gray-600 flex items-center gap-2">
                                            <DollarSign size={16} /> Est. Budget
                                        </span>
                                        <span className="text-lg font-bold text-zinc-900">
                                            {recommendation.price.total.toLocaleString()} KRW
                                        </span>
                                    </div>
                                    {/* <p className="text-xs text-gray-400 mt-1 text-right">{recommendation.price.details}</p> */}
                                </div>

                                <div className="bg-indigo-50 p-4 rounded-md text-sm text-center text-indigo-800 italic border border-indigo-100">
                                    "{recommendation.message}"
                                </div>
                            </div>

                            <button
                                onClick={() => setRecommendation(null)}
                                className="w-full py-3 mt-4 text-sm font-medium text-gray-400 hover:text-black transition-colors flex items-center justify-center gap-2"
                            >
                                <RotateCcw size={14} />
                                Try Another Style
                            </button>
                        </CardContent>
                    </Card>
                </div>
            )}
        </main>
    );
}

function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                {icon} {title}
            </h4>
            <div className="space-y-2 pl-2 border-l-2 border-gray-100">{children}</div>
        </div>
    );
}

function Item({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start group">
            <span className="text-sm font-medium text-gray-500 w-24 shrink-0 group-hover:text-indigo-500 transition-colors">{label}</span>
            <span className="text-sm text-gray-900">{value}</span>
        </div>
    );
}
