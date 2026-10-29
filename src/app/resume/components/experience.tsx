import { JobEntry } from "@/src/data/resume_entries";
import { Accordion, Separator } from "@heroui/react";
import Job from "./job";
import { ChevronDown } from "@gravity-ui/icons";

export default function Experience({ jobs }: { jobs: JobEntry[] }) {
  return (
    <div className="min-w-full">
      <h2>Experience</h2>
      <Separator />
      <Accordion
        allowsMultipleExpanded
        className="w-full max-w-2xl flex flex-col"
      >
        {jobs.sort().map((j) => (
          <Accordion.Item key={j.index}>
            <Accordion.Heading>
              <Accordion.Trigger>
                <div className="flex flex-col">
                  <span className="font-bold">{j.title}</span>
                  <span>{j.employer}</span>
                  <span>{j.location}</span>
                  <span>
                    {j.startdate.toLocaleDateString()} -{" "}
                    {j.enddate ? j.enddate.toLocaleDateString() : "Present"}
                  </span>
                </div>
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <Job jobEntry={j} key={j.index} />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
