# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// ส่วนนี้คือขั้นตอนการทำงาน

- ลูกค้าสามารถใช้คำสั่ง (npm i) บน terminal ของโปรเจคหลังจาก clone โปรเจคไว้บน vscode แล้วได้เลย

// การเพิ่มไฟล์หน้าเว็บ 

- มีการเพิ่มไฟล์ navbar.jsx และ navbar.css บนโฟลเดอร์ components คุณลูกค้าสามารถ import navbar มาใช้ในหน้าอื่นได้

- ใน App.css มีการทำ ClassName เพื่อคุมขนาดหน้าจอ

- มีการนำเข้ารูปภาพ profile.png อยู่ในโฟลเดอร์ assets

มีการดาวโหลด dependencies เพิ่มมาทั้งหมด 3 ตัว

- fontawesome (npm i @fortawesome/fontawesome-free)// คำสั่งใช้ดาวโหลด หรือ ดูวิธีติดตั้งตามลิ้งค์นี้ (https://www.borntodev.com/2023/11/12/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-font-awesome-%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87-icon/)

- qrcode (npm install qrcode)

- font IBM Plex Sans Thai (นำลิ้งค์นี้ <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;700&display=swap" rel="stylesheet">
) มาใส่ในหน้า index.html แล้วเพิ่ม font-family: 'IBM Plex Sans Thai', sans-serif; ใน body ในไฟล์ CSS หลักของคุณ

มีการแก้ไขเพิ่มเติมทุกไฟล์ที่เป็นหน้าเว็บแนะนำให้อ่านไฟล์ CSS หลายทุกตัว (ผมถนัด TailwindCSS มากกว่า 555) งานนี้เลยเขียนเยอะหน่อยครับ

