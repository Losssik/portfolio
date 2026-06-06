import { Link } from "react-router";

const Brudnopis = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link href="/articles/sport?=lang=en">Read in english</Link>
      <Link href="/articles/sport?=lang=pl">Read in polish</Link>
    </div>
  );
};
