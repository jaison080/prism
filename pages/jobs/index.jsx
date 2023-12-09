import React, { use, useEffect } from "react";
import CustomTitle from "../../utils/CustomTitle";
import JobCard from "../../components/JobCard/JobCard";
import Navbar from "../../components/Navbar/Navbar";
import jobsData from "../../data/jobsData";

export default function JobsPage() {
 

  return (
    <>
      <CustomTitle title="Jobs" />
      <Navbar />
      <div className={"jobs__container"}>
        <div className={"jobs__heading"}>JOBS</div>
        <div className={"jobs__list"}>
          {jobsData.map((job) => {
            return <JobCard job={job} />;
          })}
        </div>
      </div>
    </>
  );
}
