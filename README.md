# Vibe Coding - Hello World Assignment

## Assignment Instructions

This is the starter template for **Assignment 2: E2E Hello World (Server → Browser)**.

### Goal

Build a complete minimal app pipeline:
- A Node.js Express server
- Returns "Hello Vibe!" from an API endpoint
- Simple static HTML page fetches the message and displays it in the browser
- All generated using Cursor AI

### Requirements

1. **Server:**
   - Create endpoint: `GET /api/hello`
   - Endpoint should return: `{ message: "Hello Vibe!" }`
   - Server should run on port 3000

2. **Client:**
   - HTML page that calls `/api/hello` using `fetch()`
   - Displays the message inside `<div id="output"></div>`

3. **Documentation:**
   - Update this README with:
     - What prompts you used with Cursor AI
     - How to run the project
     - Screenshot of working application

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open the client:**
   - Open `client/index.html` in your browser
   - Or serve it through your server

4. **Use Cursor AI:**
   - Open this project in Cursor
   - Use Cursor to generate the server endpoint
   - Use Cursor to generate the client fetch code

### Example Prompts for Cursor

**For Server:**
```
Create a Node.js Express server endpoint GET /api/hello that returns { message: "Hello Vibe!" }. The server should run on port 3000 and include CORS headers for local development.
```

**For Client:**
```
Create JavaScript code that fetches from http://localhost:3000/api/hello and displays the message in a div with id="output". Include error handling.
```

### Submission

- [ ] Server endpoint works
- [ ] Client displays message
- [ ] README updated with prompts and screenshot
- [ ] All changes committed and pushed

### Getting Help

- See [Student Guide](https://github.com/repodin-education/vibe-coding-materials/blob/main/student-guide.md)
- Check [FAQ](https://github.com/repodin-education/vibe-coding-materials/blob/main/faq.md)
- Ask in help channel

---

**Good luck! 🚀**














