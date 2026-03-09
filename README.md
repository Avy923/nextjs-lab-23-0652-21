This is where the description of each component will be

01 Hello Component
A static functional component that displays a welcome heading and a short paragraph. Styled with Tailwind CSS for a clean look.

02 UserCard Component
Displays user information with typed props (name, role, optional field). Uses a fallback value for the optional prop and is rendered multiple times.

03 Counter Component
A client component using useState to track a count. Includes Increment, Decrement (no negative values), and Reset buttons.

04 Root Layout
Provides a site-wide layout with a navbar, main content wrapper, and footer. Exports metadata for custom title and description.

05 Posts Page (Async Server Component)
Fetches the first 10 posts from an API and displays title and truncated body. Uses ISR with a 60-second revalidation.

06 Post Detail Page (Dynamic Route)
Displays a single post by ID with full title, body, and userId. Includes a back link to the posts list.

07 Contact Form (Server Action)
A server-side form that extracts name, email, and message from FormData. Logs data and revalidates the contact page on submission.

08 Suspense + Loading UI
Streams delayed content using a <Suspense> boundary and a skeleton fallback. Ensures fast initial page load while SlowData loads asynchronously.

09 Middleware (Route Protection)
Intercepts requests to protect routes based on an auth-token cookie. Redirects unauthenticated users to /login and excludes static assets.

10 Cart Context + Custom Hook
Provides a global shopping cart with items, total, addItem, and removeItem via React Context. Shop page renders product cards and shows a cart summary in the navbar.