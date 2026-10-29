import { JobEntry } from "@/src/data/resume_entries";
import { Card, Separator } from "@heroui/react";

export default function Job({ jobEntry }: { jobEntry: JobEntry }) {
  return (
    <div className="flex flex-col gap-1">
      {jobEntry.highlights.map((r) => {
        return (
          <span key={r.index}>
            {r.highlight}
            {r.index < jobEntry.highlights.length - 1 ? "\\" : ""}
            <br />
          </span>
        );
      })}
    </div>
  );
}
