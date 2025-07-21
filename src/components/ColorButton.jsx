export default function ColorButton({ color, onClick }) {
  return (
    <button
      className="w-12 h-12 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    ></button>
  );
}
