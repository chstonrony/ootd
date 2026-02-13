"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { MapPin, Smile, ArrowRight, Sparkles } from "lucide-react";

interface OOTDFormProps {
    onSubmit: (data: any) => void;
}

export function OOTDForm({ onSubmit }: OOTDFormProps) {
    const [situation, setSituation] = useState("");
    const [mood, setMood] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            onSubmit({ situation, mood });
            setLoading(false);
        }, 1000);
    };

    return (
        <Card className="w-full max-w-md mx-auto shadow-lg border-none bg-white/90 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center gap-2">
                    Today's <span className="bg-zinc-900 text-white px-2 py-0.5 text-lg rounded-sm">OOTD</span>
                </CardTitle>
                <CardDescription className="text-center">
                    Tell us about your day, get the perfect look.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="situation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                            <MapPin size={16} className="text-indigo-500" /> Where are you going?
                        </label>
                        <Select
                            id="situation"
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            required
                            className="w-full"
                        >
                            <option value="" disabled>Select Situation</option>
                            <option value="campus_meeting">College Meeting / Date</option>
                            <option value="work_office">Office / Work</option>
                            <option value="funeral">Funeral</option>
                            <option value="church">Church / Religious</option>
                            <option value="friends">Hangout with Friends</option>
                            <option value="formal_event">Formal Event / Wedding</option>
                            <option value="cafe">Casual Cafe Study</option>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="mood" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                            <Smile size={16} className="text-orange-500" /> How do you feel?
                        </label>
                        <Input
                            id="mood"
                            placeholder="e.g. Confident, Cozy, Chic"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-11" disabled={loading}>
                        {loading ? (
                            <span className="flex items-center gap-2"> <Sparkles className="animate-spin" size={16} /> Styling...</span>
                        ) : (
                            <span className="flex items-center gap-2">Get Recommendation <ArrowRight size={16} /></span>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
