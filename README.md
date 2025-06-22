# StoreIt - Storage & File Sharing Platform

<div align="center">
  <img src="public/readme/hero.png" alt="StoreIt Banner" width="80%" />
  <br />
  <b>Modern, secure, and scalable file storage and sharing platform built with Next.js, Appwrite, and TailwindCSS.</b>
</div>



Full Credits to @adrianhajdin aka Javascript Mastery
---

## 🚀 Features

- User authentication (Sign up, Sign in, OTP verification)
- Effortless file uploads (documents, images, videos, audio, etc.)
- File sharing with other users
- Download, rename, and delete files
- Dashboard with storage usage summary and recent uploads
- Global search and sorting
- Responsive UI for desktop, tablet, and mobile
- Built with Next.js 15, React 19, Appwrite, TailwindCSS, TypeScript

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, TailwindCSS, ShadCN UI
- **Backend/Storage:** Appwrite (Node SDK)
- **State & Forms:** React Hook Form, Zod
- **Charts:** Recharts
- **Other:** Lucide Icons, Radix UI, class-variance-authority

---

## 📁 Folder Structure

```
.
├── app/                # Next.js app directory (routes, layouts, pages)
│   ├── (auth)/         # Auth pages (sign-in, sign-up)
│   ├── (root)/         # Main dashboard and file pages
│   └── fonts/          # Custom fonts
├── components/         # Reusable UI and logic components
│   ├── ui/             # ShadCN and custom UI primitives
│   └── ...             # Feature components (Sidebar, Card, AuthForm, etc.)
├── lib/                # Utility functions and Appwrite logic
│   ├── actions/        # File and user actions (API logic)
│   └── appwrite/       # Appwrite client setup
├── public/             # Static assets (icons, images)
├── constants/          # App-wide constants
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
├── tailwind.config.ts  # TailwindCSS config
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/storeit.git
cd storeit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://fra.cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your_project_id"
NEXT_PUBLIC_APPWRITE_DATABASE="your_db_id"
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your_users_collection_id"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your_files_collection_id"
NEXT_PUBLIC_APPWRITE_BUCKET="your_bucket_id"
NEXT_APPWRITE_KEY="your_appwrite_key"
```

> **Note:** Get these values from your [Appwrite Console](https://appwrite.io/).

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 Main Components

- **AuthForm:** Handles sign-in and sign-up with validation.
- **Sidebar:** Navigation and user info.
- **Card:** Displays file info and actions.
- **ActionDropdown:** File actions (rename, delete, share, download).
- **FileUploader:** Drag-and-drop file upload.
- **OTPModal:** OTP verification for sign-up.
- **Chart:** Dashboard storage usage visualization.

---

## 🗂️ Appwrite Integration

- Uses Appwrite for authentication, file storage, and user management.
- All file actions (upload, delete, share) are handled via Appwrite SDK.

---

## 🖼️ Assets

- All icons and images are in `public/assets/icons/`.
- Uses SVGs for crisp, scalable UI.

---

## 🧑‍💻 Contributing

1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

## ❓ FAQ

- **Q:** Appwrite setup kaise karu?  
  **A:** [Appwrite Docs](https://appwrite.io/docs) follow karo, ya `.env.local` me apne credentials daalo.

- **Q:** Build ya deploy error aa raha hai?  
  **A:** File/folder case-sensitivity check karo, especially on Vercel/Linux.

---

## 📄 License

This project is licensed under the MIT License.

