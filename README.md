# XYZ Infrastructure

This project contains the testing framework for the XYZ project. It uses Nightwatch.js to test the FastAPI application deployed in AWS.

## Requiremenst
This project has the following requirements.
- Linux (Ubuntu, specifically version 22)
- NodeJS
- Nightwatch.js
- The xyz project deployed to the cloud
- The URL to the load balancer in front of the XYZ project.


## Steps to deploy
In order to execute the XYZ automated tests, follow the steps below.

1) Clone the project locally.

2) Install the npm modules.
```npm install```

3) Set the environment variable with the appropriate load balancer URL. NOTE, this can be done as part of the command itself.
```TEST_URL=<loadbalancerURL>```

4) Execute the tests with this command.
```TES_URL=<loadbalanerURL> npx nightwatch ./test/xyz_tests.ts --env api_testing```

5) The output is stored in the tests_output folder.