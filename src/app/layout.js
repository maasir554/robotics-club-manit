import "./globals.css";

export const metadata = {
  title: "Robotics Club MANIT",
  description: "Largest student-run technical society for robotics in central india",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
