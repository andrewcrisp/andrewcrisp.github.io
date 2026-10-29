import { ContactEntries } from "@/src/data/contact_entries";
import ContactBlock from "./contactBlock";

export default function Contact() {
  return (
    <div>
      <p># Andrew Crisp</p>
      {ContactEntries.sort((a, b) => (a.index < b.index ? -1 : 1)).map((c) => {
        return (
          <ContactBlock
            contact={c}
            key={c.index}
            isLast={c.index < ContactEntries.length - 1}
          />
        );
      })}
    </div>
  );
}
