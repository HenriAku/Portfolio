"use client";

import { useContainer } from "../context/contenaire";

export const CardTechno = ({ texte, icon, link }: { texte: string; icon: string; link: string }) => {
    const { techno } = useContainer();

	const isVisible = techno === "Tout" || techno === link;

    if (!isVisible) return null;

    return (
        <div className="bg-white/40 p-6 rounded-lg hover:bg-white/50 transition ease-in-out duration-300 
                        hover:scale-105 flex flex-col items-center justify-between min-h-[160px] w-50">
            
            <div className="flex-grow flex items-center justify-center">
                <img 
                    src={icon} 
                    alt={`icône de la technologie ${texte}`}
                    className="w-30 h-30 object-contain"
                />
            </div>
            
            <p className="text-white text-center pt-3 text-xl font-medium">{texte}</p>
        </div>
    );
};