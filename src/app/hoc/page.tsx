import Link from "next/link";

function page() {
  return (
    <div>
      <Link href="hoc/loading">withLoader</Link>
      <Link href="hoc/styling">withStyles</Link>
    </div>
  );
}

export default page;
