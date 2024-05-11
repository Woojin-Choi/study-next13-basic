import "./globals.css";

export const metadata = {
  title: "Next Tutorial",
  description: "Generated by Woody",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <h1>
          <a href="/">WEB</a>
        </h1>
        <ul>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
        </ul>
        {children}
        <ul>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="update">Update</a>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
