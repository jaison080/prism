// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IPUSHCommInterface {
    function sendNotification(
        address _channel,
        address _recipient,
        bytes calldata _identity
    ) external;
}

interface IAnonAadhaarVerifier {
    function verifyProof(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[34] calldata _pubSignals
    ) external view returns (bool);
}

contract LGBTQJobMarketVerified {
    // Struct to represent a job posting
    address public EPNS_COMM_ADDRESS =
        0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7;
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

    struct User {
        string username;
        address userAddress;
    }

    struct Company {
        address owner; // Address of the company owner
        string companyName;
        string companyDescription;
    }

    // Mapping to store job postings
    mapping(uint256 => JobPosting) public jobPostings;

    // Mapping to store job applications
    mapping(uint256 => JobApplication) public jobApplications;

    mapping(string => JobPosting) public jobsByTag;

    mapping(string => address[]) public tagSubscibers;
    mapping(address => string[]) public userSubscriptions;

    // Mapping from user address to user details
    mapping(address => User) public users;

    // Mapping from company address to company details
    mapping(address => Company) public companies;

    // Counter for user registration
    uint256 public userCount;

    // Counter for job postings
    uint256 public jobPostingCount;

    // Counter for job applications
    uint256 public jobApplicationCount;

    uint256 public companyCount;

    // Event to notify when a new job is posted
    event JobPosted(uint256 jobId, address indexed employer, string jobTitle);

    // Event to notify when a new job application is submitted
    event JobApplied(
        uint256 applicationId,
        address indexed applicant,
        uint256 indexed jobId
    );

    event SubscriptionAdded(address indexed user, string tag);

    event UserCreated(address indexed user, string username);

    // Event to notify when a new company is created
    event CompanyCreated(address indexed owner, string companyName);

    function verify(
        uint256[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[34] calldata _pubSignals
    ) public view returns (bool) {
        // Arbitrum Seploia AnonAadharVerifier: 0xc3EDAEc6A47a137a7DF4C2786728A048dDE73978
        // address anonAadhaarVerifierAddr = 0xc3EDAEc6A47a137a7DF4C2786728A048dDE73978;

        // Seploia AnonAadharVerifier: 0x77a1c4bBf8cd126D38B53014040435CCAA467158
        address anonAadhaarVerifierAddr = 0x77a1c4bBf8cd126D38B53014040435CCAA467158;
        return
            IAnonAadhaarVerifier(anonAadhaarVerifierAddr).verifyProof(
                _pA,
                _pB,
                _pC,
                _pubSignals
            );
    }

    function createUser(string memory _username) external {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(
            users[msg.sender].userAddress == address(0),
            "User already exists"
        );

        userCount++;
        users[msg.sender] = User(_username, msg.sender);

        emit UserCreated(msg.sender, _username);
    }

    // Function to create a new company
    function createCompany(
        string memory _companyName,
        string memory _companyDescription
    ) external {
        companyCount++;
        companies[msg.sender] = Company(
            msg.sender,
            _companyName,
            _companyDescription
        );
        emit CompanyCreated(msg.sender, _companyName);
    }

    // Function to post a new job
    function postJob(
        string memory _jobTitle,
        string memory _jobDescription,
        string memory _companyName,
        uint256 _salary,
        string[] memory _tags,

        uint256[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[34] calldata _pubSignals
    ) external {

        require(
            verify(_pA, _pB, _pC, _pubSignals),
            "Your idendity proof is not valid"
        );

        jobPostingCount++;
        jobPostings[jobPostingCount] = JobPosting(
            msg.sender,
            _jobTitle,
            _jobDescription,
            _companyName,
            _salary,
            _tags
        );
        for (uint256 i = 0; i < _tags.length; i++) {
            jobsByTag[_tags[i]] = jobPostings[jobPostingCount];
        }

        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
            0xD44d3581954f8D6578a6f77975904dc378DCbd0D, // from channel
            0xA7597a561Be84C31C97f70343bB4cEe01d731A38, // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)
                        "+", // segregator
                        "New Job : ", // this is notification title
                        _companyName,
                        "+", // segregator
                        "new job,", // notification body
                        _jobTitle,
                        " at ",
                        _companyName,
                        "$@",
                        jobPostingCount
                    )
                )
            )
        );
        emit JobPosted(jobPostingCount, msg.sender, _jobTitle);
    }

    // Function to subscribe to a tag by a user

    function subscribeToTag(string memory _tag) external {
        // Check if the tag exists
        require(
            bytes(jobsByTag[_tag].jobTitle).length > 0,
            "Tag does not exist"
        );

        // Check if the user is already subscribed to the tag
        for (uint256 i = 0; i < userSubscriptions[msg.sender].length; i++) {
            require(
                keccak256(abi.encodePacked(userSubscriptions[msg.sender][i])) !=
                    keccak256(abi.encodePacked(_tag)),
                "Already subscribed to this tag"
            );
        }
        userSubscriptions[msg.sender].push(_tag);
        tagSubscibers[_tag].push(msg.sender);
        emit SubscriptionAdded(msg.sender, _tag);
    }

    // Function to apply for a job
    function applyForJob(uint256 _jobId, string memory _resumeHash) external {
        require(_jobId > 0 && _jobId <= jobPostingCount, "Invalid job ID");
        jobApplicationCount++;
        jobApplications[jobApplicationCount] = JobApplication(
            msg.sender,
            _jobId,
            _resumeHash
        );
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
    function getApplicationsForJob(
        uint256 _jobId
    ) external view returns (JobApplication[] memory) {
        require(_jobId > 0 && _jobId <= jobPostingCount, "Invalid job ID");
        require(
            msg.sender == jobPostings[_jobId].employer,
            "Only the employer can view applications for this job"
        );

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

    //get tags subscribed by user
    function getTagsSubscribedByUser(
        address _user
    ) external view returns (string[] memory) {
        string[] memory tags = new string[](userSubscriptions[_user].length);

        for (uint256 i = 0; i < userSubscriptions[_user].length; i++) {
            tags[i] = userSubscriptions[_user][i];
        }

        return tags;
    }

    //get users subscribed to a tag
    function getUsersSubscribedToTag(
        string memory _tag
    ) external view returns (address[] memory) {
        address[] memory subcribedUsers = new address[](
            tagSubscibers[_tag].length
        );

        for (uint256 i = 0; i < tagSubscibers[_tag].length; i++) {
            subcribedUsers[i] = tagSubscibers[_tag][i];
        }

        return subcribedUsers;
    }
}
