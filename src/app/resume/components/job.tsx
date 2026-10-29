import { JobEntry } from "@/src/data/resume_entries";
import { Card, Separator } from "@heroui/react";
import "./jobs.css";

export default function Job({ jobEntry }: { jobEntry: JobEntry }) {
  return (
    <div>
      <Separator />
      <h3 className="font-bold">{jobEntry.employer}</h3>
      <h4>Title: {jobEntry.title}</h4>
      <h5>Location: {jobEntry.location}</h5>
      <Card variant="secondary">
        <p>Responsibilities</p>
        <ul>
          {jobEntry.responsibilities.map((r) => {
            return (
              <li className={"jobResponsibility"} key={r.index}>
                {r.responsibility}
              </li>
            );
          })}
        </ul>
      </Card>
      <Card variant="secondary">
        <p>Accomplishments</p>
        <ul>
          {jobEntry.accomplishments &&
            jobEntry.accomplishments!.sort().map((a) => {
              return (
                <li className="jobAccomplishment" key={a.index}>
                  {a.accomplishment}
                </li>
              );
            })}
        </ul>
      </Card>
    </div>
  );
}
