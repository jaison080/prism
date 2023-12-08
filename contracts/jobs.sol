// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LGBTQJobMarket {
    // Struct to represent a job posting
    struct JobPosting {
        address employer; // Address of the company posting the job
        string jobTitle;
        string jobDescription;
        string companyName;
        uint256 salary;
        string[] tags;
    }

    // Struct to represent a job application
    struct JobApplication {
        address applicant; // Address of the person applying for the job
        uint256 jobId; // ID of the job being applied for
        string resumeHash; // IPFS or any decentralized storage hash for the applicant's resume
    }

    // Mapping to store job postings
    mapping(uint256 => JobPosting) public jobPostings;

    // Mapping to store job applications
    mapping(uint256 => JobApplication) public jobApplications;
    
    mapping(string => JobPosting) public jobsByTag;

    // Counter for job postings
    uint256 public jobPostingCount;

    // Counter for job applications
    uint256 public jobApplicationCount;

    // Event to notify when a new job is posted
    event JobPosted(uint256 jobId, address indexed employer, string jobTitle);

    // Event to notify when a new job application is submitted
    event JobApplied(uint256 applicationId, address indexed applicant, uint256 indexed jobId);

    // Function to post a new job
    function postJob(string memory _jobTitle, string memory _jobDescription, string memory _companyName, uint256 _salary,string[] memory _tags) external {
        jobPostingCount++;
        jobPostings[jobPostingCount] = JobPosting(msg.sender, _jobTitle, _jobDescription, _companyName,_salary, _tags);
         for (uint256 i = 0; i < _tags.length; i++) {
            jobsByTag[_tags[i]]= jobPostings[jobPostingCount];
        }
        emit JobPosted(jobPostingCount, msg.sender, _jobTitle);
    }

    // Function to apply for a job
    function applyForJob(uint256 _jobId, string memory _resumeHash) external {
        require(_jobId > 0 && _jobId <= jobPostingCount, "Invalid job ID");
        jobApplicationCount++;
        jobApplications[jobApplicationCount] = JobApplication(msg.sender, _jobId, _resumeHash);
        emit JobApplied(jobApplicationCount, msg.sender, _jobId);
    }

    // Function to retrieve information about all available jobs
    function getJobs() external view returns (JobPosting[] memory) {
        JobPosting[] memory jobs = new JobPosting[](jobPostingCount);

        for (uint256 i = 1; i <= jobPostingCount; i++) {
            jobs[i - 1] = jobPostings[i];
        }

        return jobs;
    }

    // Function to retrieve applications for a specific job
    function getApplicationsForJob(uint256 _jobId) external view returns (JobApplication[] memory) {
        require(_jobId > 0 && _jobId <= jobPostingCount, "Invalid job ID");
        require(msg.sender == jobPostings[_jobId].employer, "Only the employer can view applications for this job");

        // Count the number of applications for the job
        uint256 count = 0;
        for (uint256 i = 1; i <= jobApplicationCount; i++) {
            if (jobApplications[i].jobId == _jobId) {
                count++;
            }
        }

        // Create an array to store applications
        JobApplication[] memory applications = new JobApplication[](count);
        uint256 index = 0;

        // Populate the array with applications for the job
        for (uint256 i = 1; i <= jobApplicationCount; i++) {
            if (jobApplications[i].jobId == _jobId) {
                applications[index] = jobApplications[i];
                index++;
            }
        }

        return applications;
    }
}
