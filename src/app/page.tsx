import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Link href="/hoc">HOC PATTERN</Link>
      <Link href="/render-props">RENDER PROPS PATTERN</Link>
    </main>
  );
}
