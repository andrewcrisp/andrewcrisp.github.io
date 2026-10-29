import { JobEntry } from "@/src/data/resume_entries";
import Job from "./job";

export default function Experience({ jobs }: { jobs: JobEntry[] }) {
  return (
    <div className="min-w-full">
      <p>## Experience</p>
      {jobs.sort().map((j) => {
        return (
          <div className="flex flex-col" key={j.index}>
            <p>
              <span>### {j.employer}</span>
              <br />
              <span>{j.title}\</span>
              <br />
              <span>{j.location}\</span>
              <br />
              <span>
                {j.startdate.toLocaleDateString()} -{" "}
                {j.enddate ? j.enddate.toLocaleDateString() : "Present"}
              </span>
            </p>
            <Job jobEntry={j} key={j.index} />
          </div>
        );
      })}
    </div>
  );
}
