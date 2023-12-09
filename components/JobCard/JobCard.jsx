import React, { useEffect } from "react";
import JobDetailsModal from "../JobDetailsModal/JobDetailsModal";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function JobCard({ job }) {
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(searchParams.get("id"), job.id);
    if (searchParams.get("id") == job.id) {
      console.log("open");
      setOpen(true);
    }
  }, [searchParams]);

  return (
    <>
      <div className="job_card">
        <div className="job_card_company_logo_img">
          <Image src={logo} alt="" />
        </div>
        <div class="job_card_job_title">{job.role}</div>
        <div class="job_card_company_name">{job.company_name}</div>
        <div class="job_card_skills_container">
          {job.tags.map((skill) => {
            return <div class="job_card_skill">{skill}</div>;
          })}
        </div>
        <button class="job_card_apply">Apply</button>
        <button class="job_card_save" onClick={handleOpen}>
          View
        </button>
      </div>
      <JobDetailsModal open={open} handleClose={handleClose} job={job} />
    </>
  );
}
