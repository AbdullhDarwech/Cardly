import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ هذا السطر هو المفتاح لحل المشكلة
export default defineConfig({
  plugins: [react()],
  base: '/Cardly/', // اكتب اسم الريبو بالضبط كما هو في GitHub
})
