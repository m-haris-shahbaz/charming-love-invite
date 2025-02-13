
import { useState } from "react";
import { Heart, Calendar, MapPin } from "lucide-react";

const Index = () => {
  const [rsvp, setRsvp] = useState<boolean | null>(null);
  const [noHovered, setNoHovered] = useState(false);
  const [yesClicks, setYesClicks] = useState(0);

  const handleYesClick = () => {
    setYesClicks(prev => prev + 1);
    setRsvp(true);
  };

  const getYesMessage = () => {
    const messages = [
      "💖 You've made me the happiest person! Can't wait to see you! 💖",
      "🥰 Yay! I'm so excited! Click again if you're super sure!",
      "✨ Each click makes my heart flutter more! ✨",
      "💝 I knew you'd say yes! One more click? 💝",
      "💗 You're making this the best Valentine's ever! 💗"
    ];
    return messages[Math.min(yesClicks, messages.length - 1)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-valentine-50 to-valentine-100 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-valentine-200/30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-20 relative">
        <header className="text-center space-y-6 animate-fadeIn">
          <div className="inline-block animate-float">
            <Heart className="w-12 h-12 text-valentine-400 animate-heartbeat" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-valentine-600 tracking-tight hover:scale-105 transition-transform duration-300">
            My Dearest Valentine
          </h1>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto hover:text-valentine-500 transition-colors duration-300">
            Would you do me the honor of being my Valentine?
          </p>
        </header>

        <section className="space-y-8 animate-fadeIn [animation-delay:200ms]">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-valentine-200 hover:shadow-2xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-1">
            <p className="font-playfair text-xl text-gray-700 leading-relaxed">
              Every moment with you feels like a dream come true. Your smile lights up my world, and I couldn't imagine spending this special day with anyone else. Let's create another beautiful memory together.
            </p>
          </div>
        </section>

        <section className="space-y-6 animate-fadeIn [animation-delay:400ms]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-valentine-200 hover:shadow-2xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-valentine-500 animate-pulse" />
                <h3 className="font-playfair text-xl font-semibold text-gray-800">When</h3>
              </div>
              <p className="text-gray-600">February 14th, 2024</p>
              <p className="text-gray-600">7:00 PM</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-valentine-200 hover:shadow-2xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-valentine-500 animate-bounce" />
                <h3 className="font-playfair text-xl font-semibold text-gray-800">Where</h3>
              </div>
              <p className="text-gray-600">Our Special Place</p>
              <p className="text-gray-600">Under the Stars</p>
            </div>
          </div>
        </section>

        <section className="space-y-6 animate-fadeIn [animation-delay:600ms]">
          <h2 className="font-playfair text-3xl text-center text-valentine-600 font-semibold">
            Will You Be My Valentine?
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleYesClick}
              style={{
                transform: `scale(${1 + Math.min(yesClicks * 0.05, 0.3)})`,
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                rsvp === true
                  ? "bg-valentine-500 text-white animate-heartbeat"
                  : "bg-white text-valentine-500 hover:bg-valentine-500 hover:text-white"
              } shadow-xl hover:shadow-valentine-200/50`}
            >
              {yesClicks === 0 ? "Yes, I'd Love To!" : "Yes! Yes! Yes!"}
            </button>
            
            <div
              onMouseEnter={() => setNoHovered(true)}
              className={`relative transition-all duration-300 ${
                noHovered ? "animate-fadeIn" : ""
              }`}
            >
              {!noHovered ? (
                <button
                  className="px-8 py-3 rounded-full font-semibold bg-white text-gray-500 shadow-xl hover:shadow-gray-200/50"
                >
                  Maybe Next Time
                </button>
              ) : (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 text-center">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-valentine-200">
                    <p className="text-valentine-500 font-medium text-sm">
                      My heart won't take no for an answer! 💝
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-white/90 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-valentine-200"></div>
                </div>
              )}
            </div>
          </div>
          
          {rsvp === true && (
            <div className="text-center animate-fadeIn text-valentine-600 font-semibold mt-4">
              {getYesMessage()}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
