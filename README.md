# Dr. Sudip Paul Portfolio

Production-ready personal portfolio website built with Next.js App Router and Tailwind CSS.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the URL shown in the terminal.
If port `3000` is already occupied on your machine, Next.js will automatically use `3001` or another free port.

## Build for production

```bash
npm run build
```

## Contact form environment variables

Create a `.env.local` file in the project root and copy the values from `.env.example`.

Example:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_FROM_EMAIL=your-email@gmail.com
CONTACT_TO_EMAIL=sudip.rishabh@gmail.com
```

For Gmail:

1. Turn on 2-Step Verification for the sending Gmail account.
2. Generate a Google App Password.
3. Use that App Password as `SMTP_PASS`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default framework preset as `Next.js`.
4. Click deploy.
