/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'todo-bg': '#171823',
        'todo-card': '#25273D',
        'todo-text': '#C8CBE7',
        'todo-muted': '#494C6B',
        'todo-accent': '#3A7CFD',
        'todo-border': '#393A4B',
      },
    },
  },
  plugins: [],
}
