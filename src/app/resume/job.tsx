import { JobEntry } from "@/src/data/resume_entries";
import { Card, Separator } from "@heroui/react";

export default function Job({jobEntry}: {jobEntry: JobEntry}) {
    return (
        <div>
            <Separator />
            <h3 className='font-bold'>{jobEntry.employer}</h3>
            <h4>Title: {jobEntry.title}</h4>
            <h5>Location: {jobEntry.location}</h5>
            <p>Responsibilities:</p>
            <Card className="dark">
                
            <ul>
                {jobEntry.responsibilities.map((r) => {return <li> - {r.responsibility}</li>})}
            </ul>
            </Card>

        </div>
    )
}