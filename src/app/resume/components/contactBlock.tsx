import { LogoLinkedin } from "@gravity-ui/icons";
import { Link } from "@heroui/react";

export default function ContactBlock() {
  return (
    <div>
      <div>
        Andrew Crisp
        <p>
          <a href="andrew.crisp@gmail.com">&#9993; andrew.crisp@gmail.com</a>

          <button
            key="linkedin"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <LogoLinkedin className="size-5 text-muted" />
            <Link href="https://www.linkedin.com/in/andrew-crisp-b619438/">
              https://www.linkedin.com/in/andrew-crisp-b619438/
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
}
