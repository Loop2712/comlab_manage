my-nextjs-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── route.ts
│   │   ├── users/
│   │   │   └── route.ts
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   ├── classrooms/
│   │   ├── classSchedules/
│   │   ├── roomBookings/
│   │   ├── roomRentals/
│   │   └── conversations/
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── components/
│   │       ├── LoginForm.tsx
│   │       └── RegisterForm.tsx
│   ├── dashboard/
│   │   ├── admin/
│   │   │   └── page.tsx
│   │   ├── teachers/
│   │   │   └── page.tsx
│   │   ├── students/
│   │   │   └── page.tsx
│   │   └── components/
│   │       ├── AdminDashboard.tsx
│   │       ├── TeacherDashboard.tsx
│   │       └── StudentDashboard.tsx
│   ├── booking/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── components/
│   ├── page
│   │   └── admin
│   │       └── theme -> Header.tsx, Footer.tsx, Navbar.tsx
│   └── ... (อื่นๆ)
├── lib/
│   ├── prisma.ts
│   └── auth.ts
├── middleware.ts
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   ├── css
│   └── js
├── .env.local
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
