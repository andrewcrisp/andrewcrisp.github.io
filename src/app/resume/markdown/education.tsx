import { EducationEntry } from "@/src/data/education_entries";
import { Separator } from "@heroui/react";

export default function Education({
  educationEntries,
}: {
  educationEntries: EducationEntry[];
}) {
  return (
    <div className="w-full">
      <span>## Education</span>
      {educationEntries.sort().map((e) => {
        return (
          <div key={e.index}>
            <p>
              <span>**{e.school}**\</span>
              <br />
              <span>
                {e.level}
                {e.areaOfFocus.length > 0 ? ":" : ""} {e.areaOfFocus}\
                <br />
              </span>
              <span>Completed: {e.endYear}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
