# Weekify
### This document explains how to set up the project locally.

## Prerequisites
- Node.js
- Prisma
- PostgreSQL (Setup Docker Image or Install Manually)

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/faizi-7/weekify.git
   cd weekify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables in `.env`.
```
DATABASE_URL="postgres://ifaiz:faiz7@localhost:5432/weekify"
CLIENT_ID="GET FROM GOOGLE API"
CLIENT_SECRET="GET FROM GOOGLE API"
CLIENT_URL="http://localhost:3000/"
```
4. Run the database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Feel free to contribute by submitting a pull request or reporting issues.
