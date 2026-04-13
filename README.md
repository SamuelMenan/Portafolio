# v0-portfolio-wireframe-design

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_p3zT48YXtvABrjn5pmfVFXYZyMNg)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form + MongoDB

The contact section now sends messages to a MongoDB collection using `POST /api/contact`.

### 1) Configure environment variables

Create your local environment file from `.env.example`.

Required values:

- `MONGODB_URI`: your MongoDB connection string.
- `MONGODB_DB_NAME`: database name (default: `portfolio`).
- `MONGODB_CONTACT_COLLECTION`: collection name (default: `contact_messages`).
- `CONTACT_ADMIN_KEY`: secret key used to read messages.

### 2) Run locally

```bash
pnpm dev
```

### 3) Send a contact message

Open the home page and submit the contact form. The API validates and stores:

- name
- email
- message
- createdAt
- status
- source

### 4) Access messages easily

Open:

- `http://localhost:3000/messages`

Enter `CONTACT_ADMIN_KEY` to load recent messages from MongoDB.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/SamuelMenan/v0-portfolio-wireframe-design" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
