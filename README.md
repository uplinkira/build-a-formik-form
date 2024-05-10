# Build-a-Formik-Form

## Project Overview

This repository contains a React project aimed at demonstrating how to effectively use the Formik library to manage form state, handle validation, and submit forms. Formik simplifies the three most challenging aspects of form handling in React applications: managing form state, validation, and submissions.

## Getting Started

### Prerequisites

Before starting, ensure you have `node` and `npm` installed on your machine. This project uses npm to manage dependencies.

### Setup Instructions

1. **Clone the repository:**
```bash
bash git clone [repository-url] 
cd build-a-formik-form
```
2. **Download the starter files:**

- Download the project starter files.

3. **Run startup script:**

- Open a terminal or command prompt and navigate to the directory where the starter files are downloaded.

- Copy and paste the following commands:

#### Linux/MacOS
```bash
# Create the directory
mkdir -p ./node_modules/

# Download the node_modules.zip file
wget -O /tmp/node_modules.zip https://www.dropbox.com/s/trpd9eg7f3xq7zt/node_modules.zip?dl=0

# Unzip the node_modules.zip file to the specified directory
unzip -qq /tmp/node_modules.zip -d ./node_modules/

# Remove the node_modules.zip file
rm -f /tmp/node_modules.zip

# Change to the working directory and start the application
cd ./ && npm start
```

#### Windows
```bash

# Create the directory
New-Item -ItemType Directory -Path ".\node_modules\" -Force | Out-Null
mkdir ".\tmp"

# Download the node_modules.zip file
Invoke-WebRequest -Uri "https://www.dropbox.com/s/trpd9eg7f3xq7zt/node_modules.zip?dl=0" -OutFile ".\tmp\node_modules.zip"

# Unzip the node_modules.zip file to the specified directory
Expand-Archive -Path ".\tmp\node_modules.zip" -DestinationPath ".\node_modules\" -Force

# Remove the node_modules.zip file
Remove-Item ".\tmp\node_modules.zip"

# Change to the working directory and start the application
cd ".\" ; npm start

```

Note: Ensure that you replace the `[repository-url]` with the actual URL of the repository and adjust the paths in the script according to your file structure.

4. **Start the application:**
Once the script completes execution, the application will start automatically. You can access it by navigating to `http://localhost:3000` in your web browser.

5. **Install dependencies:** Navigate to the project's root directory and run:

```bash
npm install
```

6. **Start the application:** Once the dependencies are installed, you can start the application by running:
```bash
npm start
```
This command will launch the application in your default web browser.

## Directory Structure

- `/src`: Contains all the source code for the application, including React components and utility functions.
- `/public`: Houses static assets such as HTML files and images.
- `/config`: Includes files related to project configuration.
- `/scripts`: Contains scripts for building and deploying the project.

For more detailed information, please refer to the README files within each directory.

## Building the Form

### Form Requirements

- **Fields**:
    
    - Email (ID: `emailField`)
    - Password (ID: `pswField`)
    - Submit button (ID: `submitBtn`)
- **Validation Rules**:
    
    - Both email and password fields are required. If left empty, a message "Field required" appears below the input.
    - The email must be in a valid email format. Incorrect format displays the message "Username should be an email".
- **Success Criteria**:
    
    - Upon successful validation, a "Login Successful" message appears in an alert box.

### Error Handling

- Error messages for the email and password are displayed within div elements with IDs `emailError` and `pswError`, respectively.

## Running the Application

Once setup is complete and the application is running, you can test the login form functionality through the UI presented in the browser. Ensure that the form handles states and validations as specified.