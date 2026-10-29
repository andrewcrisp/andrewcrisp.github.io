import { CertificateEntry } from "@/src/data/certificate_entries";
import { Separator } from "@heroui/react";

export default function Certificates({
  certificates,
}: {
  certificates: CertificateEntry[];
}) {
  let recordOrder = 0;
  return (
    <div className="w-full">
      <h2>Certifications</h2>
      <ul>
        {certificates
          .sort((a, b) => {
            if (a.institution == b.institution) {
              return a.index < b.index ? -1 : 1;
            } else {
              return a.institution < b.institution ? -1 : 1;
            }
          })
          .map((c) => {
            recordOrder++;
            return (
              <div className="flex flex-col text-sm py-1 px-3.5" key={c.index}>
                {recordOrder !== 1 && <Separator />}
                <span>
                  {c.institution} - {c.certificate}
                </span>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
