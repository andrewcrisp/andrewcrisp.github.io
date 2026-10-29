import { ContactEntry } from "@/src/data/contact_entries";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import Link from "next/link";

export default function ContactBlock({ contact }: { contact: ContactEntry }) {
  return (
    <button
      key={contact.index}
      className="flex items-center gap-3 rounded-xl px-3 py-0.5 text-sm text-foreground transition-colors hover:bg-default"
      type="button"
    >
      <Link href={contact.destination}>
        <span className="flex flex-row">
          {contact.icon}
          <span>{contact.label}</span>
          {contact.isLinkOut ? (
            <ArrowUpRightFromSquare className="size-3 text-muted" />
          ) : (
            <></>
          )}
        </span>
      </Link>
    </button>
  );
}
