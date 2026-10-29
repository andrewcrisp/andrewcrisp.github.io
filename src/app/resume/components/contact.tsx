import { ContactEntries } from "@/src/data/contact_entries";
import ContactBlock from "./contactBlock";

export default function Contact() {
  return (
    <div>
      <div>
        <span className="text-2xl px-3">Andrew Crisp</span>
        <span>
          {ContactEntries.sort((a, b) => (a.index < b.index ? -1 : 1)).map(
            (c) => {
              return <ContactBlock contact={c} key={c.index} />;
            },
          )}
        </span>
      </div>
    </div>
  );
}
