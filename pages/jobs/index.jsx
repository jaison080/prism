import React from "react";
import CustomTitle from "../../utils/CustomTitle";
import JobCard from "../../components/JobCard/JobCard";

export default function JobsPage() {
  return (
    <>
      <CustomTitle title="Add Job" />
      <div className={"jobs__container"}>
        <div className={"jobs__heading"}>JOBS</div>
        <div className={"jobs__list"}>
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </>
  );
}