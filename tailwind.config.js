/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // สำหรับ App Router
    './pages/**/*.{js,ts,jsx,tsx}', // สำหรับ Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // ถ้าคุณใช้โฟลเดอร์ components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
