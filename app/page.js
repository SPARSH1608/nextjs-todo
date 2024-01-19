import Link from 'next/link';
const HomePage = () => {
  console.log('HomePage');
  return (
    <div className="text-5xl mb-8 font-bold">
      <h1>Next Js Tutorial</h1>
      <Link href="/about" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
