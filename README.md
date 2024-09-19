# DevExchange

A StackOverflow-inspired Q&A platform built with Next.js and Node.js, featuring advanced search capabilities, AI-generated answers, and a reputation system to foster community engagement.

![DevExchange_3](https://github.com/user-attachments/assets/85dce43e-0dd1-42e2-9ae2-219a8866422a)
![DevExchange_2](https://github.com/user-attachments/assets/4c4459e6-4a43-4000-8206-b9cd29af5c1b)

## Demo

Check out the live application: [DevExchange](https://dev-exchange-sherard-dalaguits-projects.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Features

- **Advanced Search, Filtering, and Pagination**: Enhanced question discovery and content navigation.
- **AI-Generated Answers**: Integrated with OpenAI API to automate responses to common technical questions.
- **Badge and Reputation System**: Incentivizes user contributions through voting and ranking mechanisms.
- **User Authentication**: Secure user registration and login.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Front-end**:
  - Next.js
  - React
  - Tailwind CSS
- **Back-end**:
  - Node.js
  - MongoDB
- **APIs and Libraries**:
  - OpenAI API
  - Clerk.dev
  - TinyMCE
- **Deployment**:
  - Vercel

## Installation

To run the project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** database (you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local instance).
- **OpenAI API key** (for AI-generated answers).
- **Clerk API keys** (for user authentication).
- **TinyMCE API key** (for the rich text editor).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sherard-dalaguit/DevExchange.git
   cd DevExchange

2. **Install dependencies**:

   ```bash
   npm install
   ```
   This command installs all the necessary dependencies listed in the `package.json` file, including:

    - **Next.js**: A React framework for building server-side rendered and statically generated applications.
    - **React**: A JavaScript library for building user interfaces.
    - **Tailwind CSS**: A utility-first CSS framework for styling.
    - **Node.js**: JavaScript runtime for server-side development.
    - **MongoDB**: A NoSQL database for storing application data.
    - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
    - **Clerk**: A user authentication and management solution.
    - **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
    - **OpenAI API Client**: For integrating AI-generated answers.
    - **Other dependencies as listed in the `package.json` file.**


3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:
   ```env
    # OpenAI API Key
    OPENAI_API_KEY=your_actual_openai_api_key

    # MongoDB Connection String
    MONGODB_URI=your_actual_mongodb_connection_string

    # Clerk Authentication Keys
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_actual_clerk_publishable_key
    CLERK_SECRET_KEY=your_actual_clerk_secret_key
    NEXT_CLERK_WEBHOOK_SECRET=your_actual_clerk_webhook_secret

    # Clerk Redirect URLs
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/sign-up

    # TinyMCE Editor API Key
    NEXT_PUBLIC_TINY_EDITOR_API_KEY=your_actual_tinymce_api_key

    # Server URL
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000
    ```

      ### Note
      
      - **OPENAI_API_KEY**: Obtain this from your OpenAI account.
      - **MONGODB_URI**: Your MongoDB connection string. For MongoDB Atlas, it looks like `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority`.
      - **Clerk Keys**: Sign up at [Clerk.dev](https://clerk.dev/) to get your publishable key, secret key, and webhook secret.
      - **TinyMCE API Key**: Register at [TinyMCE](https://www.tiny.cloud/) to get your API key.
      - **NEXT_PUBLIC_SERVER_URL**: The base URL of your server. Use `http://localhost:3000` for local development.
      
      **Security Reminder**: Do not commit your `.env.local` file to version control. It's included in `.gitignore` by default to prevent sensitive information from being exposed.

4. **Run the development server**:

   ```bash
   npm run dev

5. **Access the application**:

   Open http://localhost:3000 in your browser

## Usage

- **Ask Questions**: Users can post questions on various programming topics.

- **Answer Questions**: Contribute by providing answers to questions posted by others.

- **Search and Filter**: Use the advanced search and filtering options to find relevant questions and answers.

- **AI Assistance**: Receive automated answers generated by AI for common technical questions.

- **Earn Reputation**: Gain badges and reputation points through community participation.

## Future Improvements

- **Global Search**: Will fix bugs related to global search sometimes leading to undefined url addresses.

## Contact

**Sherard Dalaguit**  
[Email](mailto:sherard.softwaredev@gmail.com) | [LinkedIn](https://www.linkedin.com/in/sherard-d)
