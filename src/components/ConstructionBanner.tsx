export default function ConstructionBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-black to-yellow-400 bg-[length:40px_40px] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #fbbf24 0px,
            #fbbf24 20px,
            #000000 20px,
            #000000 40px
          )`
        }}
      />
      <div className="relative z-10 text-center py-3 px-4 w-1/3 m-auto">
        <p className="text-red-500 bg-white font-bold text-lg drop-shadow-lg">
          ⚠️ This project is under construction! ⚠️
        </p>
      </div>
    </div>
  );
}