import type { JSX } from "react/jsx-runtime";

export default function Footer(): JSX.Element {
  return (
    <footer class="border-t border-gray-200 bg-white py-8">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex gap-5 text-gray-500 text-sm">
          <span>© 2025 Alex Rivera — Full Stack Developer</span>
        </div>
        <div class="flex gap-5 text-gray-600">
          <a href="#" class="hover:text-blue-600 transition">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-blue-600 transition">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="hover:text-blue-600 transition">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="hover:text-blue-600 transition">
            <i class="fab fa-dev"></i>
          </a>
        </div>
        <div class="text-xs text-gray-400">
          <i class="fas fa-code"></i> HTML · CSS · Tailwind · React · Node.js ·
          Express · MongoDB · PostgreSQL · Git · GitHub
        </div>
      </div>
    </footer>
  );
}
