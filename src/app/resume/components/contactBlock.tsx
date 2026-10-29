import {
  ArrowUpRightFromSquare,
  Envelope,
  LogoGithub,
  LogoLinkedin,
} from "@gravity-ui/icons";
import { Link } from "@heroui/react";

export default function ContactBlock() {
  return (
    <div>
      <div>
        <span className="text-2xl px-3">Andrew Crisp</span>
        <span>
          <button
            key="email"
            className="flex items-center gap-3 rounded-xl px-3 py-.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <Link href="mailto:andrew.crisp@gmail.com">
              <Envelope className="size-5 text-muted" />
              andrew.crisp@gmail.com
            </Link>
          </button>
          <button
            key="linkedin"
            className="flex items-center gap-3 rounded-xl px-3 py-.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <Link href="https://www.linkedin.com/in/andrew-crisp-b619438/">
              <LogoLinkedin className="size-5 text-muted" />
              https://www.linkedin.com/in/andrew-crisp-b619438/
              <ArrowUpRightFromSquare className="size-3 text-muted" />
            </Link>
          </button>
          <button
            key="github"
            className="flex items-center gap-3 rounded-xl px-3 py-.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <Link href="https://github.com/andrewcrisp">
              <LogoGithub className="size-5 text-muted" />
              https://github.com/andrewcrisp
              <ArrowUpRightFromSquare className="size-3 text-muted" />
            </Link>
          </button>
        </span>
      </div>
    </div>
  );
}
