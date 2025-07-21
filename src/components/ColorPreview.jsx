export default function ColorPreview({ color }) {
  return (
    <div>
      {color ? (
        <>
          <p className="mb-2 text-xl">Selected Color: <span className="capitalize">{color}</span></p>
          <div
            className="w-24 h-24 mx-auto rounded-lg border shadow-inner"
            style={{ backgroundColor: color }}
          ></div>
        </>
      ) : (
        <p className="italic text-gray-500">No color selected yet.</p>
      )}
    </div>
  );
}
