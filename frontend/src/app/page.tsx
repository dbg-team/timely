import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h2>Hello!</h2>
    Hello, Next JS!
    <Link href="/users">Users</Link>
    <Link href="/main">Main</Link>
    </>
  );
}
