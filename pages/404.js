import Link from "next/link";

export default function Custom404() {
  return (
    <section className="min-h-screen flex">
      <div className="m-auto text-center">
        <h1 className="text-8xl mb-8">Oops!</h1>
        <p className="text-body text-secondary mb-8">
          Nothing here, are you lost? Need a hand? <br />- error code 404
        </p>
        <Link href="/">
          <a className="btn-secondary">Go Home</a>
        </Link>
      </div>
    </section>
  );
}
