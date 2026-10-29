import { Envelope, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Link } from "@heroui/react";

export default function ContactBlock() {
  return (
    <div>
      <div>
        <span className="text-2xl">Andrew Crisp</span>
        <span>
          <button key="email" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default" type="button">
            <Envelope className="size-5 text-muted" />
            <Link href="andrew.crisp@gmail.com">andrew.crisp@gmail.com</Link>
          </button>
          <button key="linkedin" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default" type="button">
            <LogoLinkedin className="size-5 text-muted" />
            <Link href="https://www.linkedin.com/in/andrew-crisp-b619438/">https://www.linkedin.com/in/andrew-crisp-b619438/</Link>
          </button>
          <button key="github" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default" type="button">
            <LogoGithub className="size-5 text-muted" />
            <Link href="https://github.com/andrewcrisp">https://github.com/andrewcrisp</Link>
          </button>
        </span>
      </div>
    </div>
  );
}
