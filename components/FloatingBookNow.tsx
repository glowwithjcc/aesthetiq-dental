export default function FloatingBookNow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-xl z-50"
    >
      Book Now
    </button>
  );
}
