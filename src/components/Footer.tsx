import { Mail } from "lucide-react";
import InstagramLogo from "../logo/Instagram";
import LinkedinLogo from "../logo/Linkedin";
import GithubLogo from "../logo/Github";

const Footer = () => (
  <footer className="relative z-10 mt-20 border-t border-slate-200/50 py-8">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Muhammad Ridho Ar-Rosyid. All rights
        reserved.
      </p>
      <div className="flex gap-4">
        <a
          href="https://linkedin.com/in/muhammad-ridho-ar-rosyid/"
          target="_blank"
          rel="noreferrer"
          className="glass-card hover:text-primary rounded-full p-2 text-slate-600"
        >
          <LinkedinLogo className="hover:text-primary size-6 text-slate-600" />
        </a>

        <a
          href="mailto:muhammadridhoarrosyid@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="glass-card hover:text-primary rounded-full p-2 text-slate-600"
        >
          <Mail className="size-6" />
        </a>
        <a
          href="https://github.com/ridhoarrosyid/"
          target="_blank"
          rel="noreferrer"
          className="glass-card hover:text-primary rounded-full p-2 text-slate-600"
        >
          <GithubLogo className="size-6" />
        </a>
        <a
          href="https://www.instagram.com/ridhooarrosyid/"
          target="_blank"
          rel="noreferrer"
          className="glass-card hover:text-primary rounded-full p-2 text-slate-600"
        >
          <InstagramLogo className="size-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
