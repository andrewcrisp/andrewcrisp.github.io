import { EducationEntry } from "@/src/data/education_entries";
import { Separator } from "@heroui/react";

export default function Education({ educationEntries }: { educationEntries: EducationEntry[] }) {
  return (
    <div className="w-full">
      <h2>Education</h2>
      <ul>
        {educationEntries.sort().map((e) => {
          return (
            <div className="flex flex-col" key={e.index}>
              {e.index !== 0 && <Separator />}
              <span>{e.school}</span>
              <span>
                {e.level}
                {e.areaOfFocus.length > 0 ? ":" : ""} {e.areaOfFocus}
              </span>
              <span>Completed: {e.endYear}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
