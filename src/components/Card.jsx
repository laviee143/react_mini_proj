export default function Card({ children }) {
  return (
    <div className="bg-pink-200 p-8 rounded-2xl shadow-lg border w-full max-w-md text-center">
      {children}
    </div>
  );
}
