import { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import Card from "./components/Card.jsx"; 

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const resetColor = () => {
    setSelectedColor(null);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-pink-100">
      <Card>
        <h1 className="text-3xl font-bold mb-6">Color Palette Picker</h1>

        <div className="flex justify-center gap-4 mb-4">
          <ColorButton color="red" onClick={handleColorSelect} />
          <ColorButton color="green" onClick={handleColorSelect} />
          <ColorButton color="blue" onClick={handleColorSelect} />
        </div>

        <button
          onClick={resetColor}
          className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Reset Color
        </button>

        <ColorPreview color={selectedColor} />
      </Card>
    </main>
  );
}
