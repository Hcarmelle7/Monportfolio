export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Carmelle Helle. Construit avec Next.js & Tailwind.</p>
    </footer>
  );
}