
import { useState } from "react";
import { Heart, Calendar, MapPin } from "lucide-react";

const Index = () => {
  const [rsvp, setRsvp] = useState<boolean | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-valentine-50 to-valentine-100">
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-20">
        {/* Header Section */}
        <header className="text-center space-y-6 animate-fadeIn">
          <div className="inline-block animate-float">
            <Heart className="w-12 h-12 text-valentine-400 animate-heartbeat" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-valentine-600 tracking-tight">
            My Dearest Valentine
          </h1>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Would you do me the honor of being my Valentine?
          </p>
        </header>

        {/* Message Section */}
        <section className="space-y-8 animate-fadeIn [animation-delay:200ms]">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-valentine-200">
            <p className="font-playfair text-xl text-gray-700 leading-relaxed">
              Every moment with you feels like a dream come true. Your smile lights up my world, and I couldn't imagine spending this special day with anyone else. Let's create another beautiful memory together.
            </p>
          </div>
        </section>

        {/* Details Section */}
        <section className="space-y-6 animate-fadeIn [animation-delay:400ms]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-valentine-200">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-valentine-500" />
                <h3 className="font-playfair text-xl font-semibold text-gray-800">When</h3>
              </div>
              <p className="text-gray-600">February 14th, 2024</p>
              <p className="text-gray-600">7:00 PM</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-valentine-200">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-valentine-500" />
                <h3 className="font-playfair text-xl font-semibold text-gray-800">Where</h3>
              </div>
              <p className="text-gray-600">Our Special Place</p>
              <p className="text-gray-600">Under the Stars</p>
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="space-y-6 animate-fadeIn [animation-delay:600ms]">
          <h2 className="font-playfair text-3xl text-center text-valentine-600 font-semibold">
            Will You Be My Valentine?
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setRsvp(true)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                rsvp === true
                  ? "bg-valentine-500 text-white scale-105"
                  : "bg-white text-valentine-500 hover:bg-valentine-500 hover:text-white"
              } shadow-xl hover:shadow-valentine-200/50`}
            >
              Yes, I'd Love To!
            </button>
            <button
              onClick={() => setRsvp(false)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                rsvp === false
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-500 hover:text-white"
              } shadow-xl hover:shadow-gray-200/50`}
            >
              Maybe Next Time
            </button>
          </div>
          {rsvp === true && (
            <div className="text-center animate-fadeIn text-valentine-600 font-semibold mt-4">
              💖 You've made me the happiest person! Can't wait to see you! 💖
            </div>
          )}
          {rsvp === false && (
            <div className="text-center animate-fadeIn text-gray-600 mt-4">
              I understand. Perhaps another time then...
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
