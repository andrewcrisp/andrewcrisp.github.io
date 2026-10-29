import { CertificateEntry } from "@/src/data/certificate_entries";

export default function Certificates({
  certificates,
}: {
  certificates: CertificateEntry[];
}) {
  let recordOrder = 0;
  return (
    <div className="w-full">
      <p>## Certifications</p>
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
            <div key={c.index}>
              {c.institution} - {c.certificate}
              {recordOrder < certificates.length ? "\\" : ""}
            </div>
          );
        })}
    </div>
  );
}
