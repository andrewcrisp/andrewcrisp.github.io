import { ContactEntry } from "@/src/data/contact_entries";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import Link from "next/link";

export default function ContactBlock({
  contact,
  isLast = false,
}: {
  contact: ContactEntry;
  isLast: boolean;
}) {
  return (
    <span>
      <Link href={contact.destination}>
        <span className="flex flex-row">
          {contact.icon}
          <span>{contact.label}</span>
          {contact.isLinkOut ? (
            <ArrowUpRightFromSquare className="size-3 text-muted" />
          ) : (
            <></>
          )}
          {isLast ? "\\" : ""}
        </span>
      </Link>
    </span>
  );
}
