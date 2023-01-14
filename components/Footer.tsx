import LemonIcon from "icons/lemon-2.tsx";
import GithubIcon from "icons/brand-github.tsx";

export default function Footer() {
  return (
    <footer class="flex justify-end gap-4 text-sm">
      <a
        class="flex items-center gap-1 hover:underline focus:underline"
        href="https://fresh.deno.dev"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LemonIcon alt="Fresh logo" />
        <span>Made with Fresh</span>
      </a>

      <a
        class="flex items-center gap-1 hover:underline focus:underline"
        href="https://github.com/stephenmelnicki/denopaste"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon alt="GitHub logo" />
        <span>View Source</span>
      </a>
    </footer>
  );
}
