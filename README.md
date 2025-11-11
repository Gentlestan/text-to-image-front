ImageGen — AI Text-to-Image Generator (Frontend)

ImageGen is a modern AI-powered web application that transforms your text prompts into stunning images within seconds.
Built with Next.js, it connects to a backend powered by RapidAPI and provides users with authentication, secure image management, and live error monitoring via Sentry.

“Email verification is required to activate accounts. For demo purposes, only selected users are given the verification link. This mimics real-world gated access and prevents unintended use of image generation features.”

🚀 Features
🧠 AI-Powered Image Generation

Enter a text prompt and instantly get high-quality AI-generated visuals.

Built using a Text-to-Image API (RapidAPI integration).

💾 Image Management

View all your generated images in your personal gallery.

Download or delete any image anytime.

Saved images persist per user session.

🔐 Secure Authentication

User Signup, Login, and Logout using JWT-based authentication.

Includes protected routes for authenticated users only.

⚙️ Monitoring & Error Tracking

Sentry integrated for real-time bug tracking and performance monitoring.

💡 Coming Soon (SaaS Upgrade)

Subscription plans for higher-quality generations.

API usage dashboard.

Prompt history analytics.

Team/workspace support.

🖥️ Tech Stack
Category Technology
Frontend Framework Next.js 14

UI Components Tailwind CSS
, Lucide React

Authentication JWT
API Integration RapidAPI (Text-to-Image Endpoint)
State Management React Hooks / Context API
Error Tracking Sentry

Hosting Vercel (Frontend)
Version Control Git + GitHub
📸 Screenshots
Home Page AI Gallery Prompt Example

⚙️ Project Structure
├── pages/
│ ├── index.tsx # Homepage with hero, features, and samples
│ ├── login.tsx # User login page
│ ├── signup.tsx # New user registration
│ ├── dashboard.tsx # Protected gallery route
│
├── components/ # Reusable UI components
├── public/samples/ # Sample AI-generated images
├── styles/ # Tailwind and global styles
├── utils/ # Helper functions (API, JWT, etc.)
└── README.md

🔧 Environment Variables

Create a .env.local file in your root directory with the following keys:

NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.onrender.com/api
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here

⚠️ Never commit your .env.local file — ensure it’s listed in .gitignore.

🪄 Getting Started
1️⃣ Clone the repository
git clone https://github.com/yourusername/imagegen-frontend.git
cd imagegen-frontend

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

Visit 👉 http://localhost:3000

🔐 Authentication Flow

Users register or log in to obtain a JWT token.

The token is stored securely in localStorage or cookies.

Protected routes check for valid JWT before rendering dashboard pages.

🧩 API Integration (RapidAPI)

The frontend communicates with the backend (RapidAPI-powered service) for:

Text-to-Image Generation

Image Upload/Deletion

Authentication (JWT)

User Image Fetching

📈 Deployment

You can deploy the project easily on Vercel
.

Push your code to GitHub.

Import the repo into Vercel.

Add environment variables in your project’s Vercel dashboard.

Deploy 🚀

🧠 Future Enhancements

🌐 Multi-language prompt support

🧑‍🤝‍🧑 Community showcase feed

💳 Subscription-based credits

🎨 Advanced style controls (realism, anime, fantasy)

📊 Usage analytics dashboard

🧑‍💻 Author

Onyebuchi Ohazulike
Frontend Developer | AI Enthusiast
📧 sohazulike@gmail.com

🌐 Portfolio Website

📝 License

This project is licensed under the MIT License — feel free to use, modify, and build upon it.
