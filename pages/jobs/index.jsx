import React from "react";
import CustomTitle from "../../utils/CustomTitle";
import JobCard from "../../components/JobCard/JobCard";
import Navbar from "../../components/Navbar/Navbar";
import jobsData from "../../data/jobsData";
import { useRouter } from "next/router";

export default function JobsPage() {
  const router = useRouter();

  return (
    <>
      <CustomTitle title="Jobs" />
      <Navbar />
      <div className={"jobs__container"}>
        <div className={"jobs__heading"}>JOBS</div>
        <button
          className="job_card_apply"
          style={{
            padding: "1rem",
            borderRadius: "4px",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => router.push("/jobs/create")}
        >
          Add Job
        </button>
        <div className={"jobs__list"}>
          {jobsData.map((job) => {
            return <JobCard job={job} key={job.id} />;
          })}
        </div>
      </div>
    </>
  );
}
