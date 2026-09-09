"use client";

export const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative flex flex-col items-center justify-center pt-35 md:pt-50 pb-16">
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" src="images/fond.png" alt="fond de fumée" />

            <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Salut, bienvenue sur mon portfolio. <br />Je suis Henri</h1>
                <p className="text-xl text-white mb-8">Développeur web passionné. Prêt à aider dans vos projets web.</p>
            </div>

            <div className="relative z-10 flex flex-col mx-auto border-2 rounded-4xl mt-6">
                <img src="/images/fleche-bottom-bleu.png" 
                    alt="image de la flèche du bas indiquant de scroll" 
                    className="z-10 w-16 h-16 animate-bounce translate-y-3 cursor-pointer" 
                    onClick={handleScroll}/>
            </div>
        </div>
    );
};