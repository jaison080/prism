import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

function JobDetailsModal({ open, handleClose, job }) {
  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "#c9e9ff",
          color: "#00487c",
          borderRadius: "1rem",
          padding: "1rem",
          fontFamily: "Poppins",
        },
      }}
      BackdropProps={{
        style: {
          opacity: 0.5,
          background:
            "linear-gradient(90deg, #0C4C82 -13.51%, #0D4F84 -12.59%, #187BA2 5.14%, #1F9BB8 20.99%, #24AFC5 34.24%, #26B6CA 43.28%, #30B9C7 50.27%, #4DBFBE 62.37%, #7ACBAF 78.1%, #B1D89E 94.53%)",
        },
      }}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className={"job_info_modal_title"}>Job Info</div>
      </DialogTitle>
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Job Title*</div>
              <div className={"job_info_modal_input"}>
                <input type="text" value={job.role} disabled />
              </div>
            </div>
          </div>
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Company Name*</div>
              <div className={"job_info_modal_input"}>
                <input type="text" value={job.company_name} disabled />
              </div>
            </div>
          </div>
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Tags*</div>
              <div className={"job_info_modal_input"}>
                <input type="text" value={job.tags.join(" , ")} disabled />
              </div>
            </div>
          </div>
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Location*</div>
              <div className={"job_info_modal_input"}>
                <input type="text" value={job.location} disabled />
              </div>
            </div>
          </div>
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Contact Number*</div>
              <div className={"job_info_modal_input"}>
                <input type="text" value={job.phone} disabled />
              </div>
            </div>
          </div>
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Contact Email*</div>
              <div className={"job_info_modal_input"}>
                <input type="text" value={job.email} disabled />
              </div>
            </div>
          </div>
          <div className={"job_info_fields"}>
            <div className={"job_info_field"}>
              <div className={"job_info_input__label"}>Description*</div>
              <div className={"job_info_modal_input"}>
                <textarea
                  type="text"
                  rows="7"
                  value={job.description}
                  disabled
                ></textarea>{" "}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default JobDetailsModal;
