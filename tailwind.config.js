/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/vanilla/layouts/**/*.html",
    "./content/**/*.md", // 让 Markdown 里的 HTML 也被扫描到
  ],
  theme: {
    extend: {
      // colors: {
      //   "my-ultramarine": "#00387B",
      //   "my-pink": "#d77ab2",
      //   "my-sakura": "#f4ced8",
      // },
      // fontFamily: {
      //   serif: ['"Noto Serif"', '"Noto Serif SC"', "serif"],
      //   sans: ['"Noto Sans"', '"Noto Sans SC"', "sans-serif"],
      // },
      typography: () => ({
        DEFAULT: {
          css: {
            /* 正文文本、标题 */
            // "--tw-prose-body": "var(--color-my-ultramarine)",
            "--tw-prose-headings": "var(--color-my-ultramarine)",

            /* 强调色主体：链接、粗体、行内 code、引文竖线… */
            "--tw-prose-bold": "var(--color-my-ultramarine)",
            "--tw-prose-links": "var(--color-blue-300)",
            "--tw-prose-code": "var(--color-my-ultramarine)",
            "--tw-prose-quotes": "var(--color-blue-500)",
            "--tw-prose-quote-borders": "var(--color-blue-300)",

            // 行内 code 的背景
            // "--tw-prose-code-bg": "#f4ced8",
            "--tw-prose-pre-code": "var(--color-my-ultramarine)",
            "--tw-prose-pre-bg": "var(--color-pink-50)",
            /* 表格边框 & <thead> 背景 */
            "--tw-prose-th-borders": "var(--color-my-ultramarine)",
            "--tw-prose-td-borders": "var(--color-my-ultramarine)",
            blockquote: {
              strong: {
                color: "var(--tw-prose-bold)",
              },
            },
            pre: {
              border: "1px solid var(--color-pink-500)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
