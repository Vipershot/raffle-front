import { TfiCup } from "react-icons/tfi";

interface WinnerCardProps {
  name?: string;
  product?: string;
  date?: string;
  number?: number;
  avatarUrl?: string;
}

export default function CardWinners({
  name = "Maikol Sanchez",
  product = "iPhone 13 Pro",
  date = "15-05-2023",
  number = 23,
  avatarUrl = "https://img.freepik.com/vector-premium/diseno-avatar-persona_24877-38131.jpg",
}: WinnerCardProps) {
  return (
    
    <div className=" mx-auto overflow-hidden rounded-xl  w-full p-6">
  <div className="mb-4 space-y-4">
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <img src={avatarUrl} alt={name} className="h-10 w-10 rounded-full" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <TfiCup 
              className="text-lg text-info"
              size={20}
            />
            <span className="text-xl font-bold text-info">Ganador</span>
          </div>
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold bg-info text-white">
          {number}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        {product}
      </div>
      <time className="text-sm text-gray-400">{date}</time>
    </div>
  </div>
  <div className="p-6">
    <div className="overflow-hidden rounded-xl bg-gradient-to-b from-zinc-200 to-white p-6">
      <div className="flex justify-center">
        <div className="relative h-48 w-48">
          <div className="absolute inset-0 animate-spin-slow">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 transform"
                style={{
                  transform: `${i * 60}deg`,
                }}
              >
                <div
                  className="h-48 w-48 rounded bg-gray-200 opacity-50"
                  style={{
                    backgroundColor: `hsl(${i * 60}, 70%, 90%)`,
                    transform: "translateX(50%) scale(0.8)",
                  }}
                />
              </div>
            ))}
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HyZLFDIAnLfDOjgB0OrkXt3GrvC7QcELbQ&s"
            alt="iPhone"
            className="absolute left-1/2 top-1/2 w-full h-full rounded-full -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
