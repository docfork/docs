# Docfork Documentation 📚

**The official documentation source for [Docfork](https://docfork.com), the Model Context Protocol (MCP) server that provides up-to-date documentation to AI agents.**

[![Live Docs](https://img.shields.io/badge/Read_Docs-docfork.com%2Fdocs-0098FF?style=for-the-badge&logo=readthedocs&logoColor=white)](https://docfork.com/docs)
[![Built with Fumadocs](https://img.shields.io/badge/Built_with-Fumadocs-purple?style=flat-square)](https://fumadocs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

## 📖 What is this?

This repository hosts the source code and content for the **Docfork Documentation** website. It is a [Next.js](https://nextjs.org) application powered by [Fumadocs](https://fumadocs.dev).

We believe in **Docs-as-Code**. By keeping our documentation in a public repository, we allow the community to:

- Fix typos and improve clarity.
- Add configuration guides for new MCP clients.
- Share advanced prompting strategies.

## 📂 Project Structure

If you are looking to edit a specific page, here is where the content lives:

```text
.
├── content/
│     ├── introduction.mdx     # The "Welcome" page
│     ├── installation/        # Installation guides (Cursor, VS Code, etc.)
│     ├── features/            # Feature deep dives (Cabinets, Scoping)
│     └── guides/              # Best practices and prompting strategies
├── public/                    # Static assets (images, diagrams)
└── src/app/                   # Next.js app router logic
```

## 🛠️ Local Development

To run the documentation site locally for testing changes:

1. **Clone the repository:**

```bash
git clone [https://github.com/docfork/docs.git](https://github.com/docfork/docs.git)
cd docs
```

2. **Install dependencies:**

```bash
pnpm install
# or
npm install
```

3. **Start the development server:**

```bash
pnpm run dev
# or
npm run dev
```

4. **View in Browser:**
   Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see your changes live.

## ✍️ Contributing

We welcome contributions! If you found a new way to use Docfork with a specific tool, please open a PR.

### Adding a New MCP Client

1. Create a new `.mdx` file in `content/docs/installation/`.
2. Or, add a row to the table in `content/docs/installation/all-clients.mdx`.
3. Submit a Pull Request with the label `documentation`.

### Improving Guides

If you have a "Prompting Strategy" that works perfectly for a specific library (e.g., "How to get perfect results for Rust Crates"), feel free to add it to `content/docs/guides/`.

## 🔗 Related Repositories

- **[docfork-mcp](https://github.com/docfork/docfork-mcp)**: The core MCP server code.
- **[docfork-examples](https://www.google.com/search?q=https://github.com/docfork/examples)**: (Coming Soon) Example projects and starter kits.

## 📄 License

This documentation is licensed under the [MIT License](https://www.google.com/search?q=./LICENSE).

---

© 2026 Docfork Corp. Pty Ltd.
