import Link from "next/link";

export default function Custom404() {
  return (
    <section className="min-h-screen flex">
      <div className="m-auto text-center">
        <h1 className="text-6xl md:text-8xl mb-8">Oops!</h1>
        <p className="text-xl md:text-body text-secondary mb-16">
          404 - Page Not Found
        </p>
        <Link href="/">
          <a className="btn">Go Home</a>
        </Link>
      </div>
    </section>
  );
}
