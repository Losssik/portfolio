import CodeBlock from "../components/CodeBlock/CodeBlock";

const ParamsEn = () => {
  return (
    <div className="article">
      <h1>params and searchparams</h1>

      <p>
        <b>params</b> - for a given URL <b>params</b> is a <b>promise</b> that
        resolves to an <b>object</b> containing the <b>dynamic route</b>, like
        for example: id.
      </p>

      <p>
        <b>searchParams</b> - for a given URL <b>searchParams</b> is a{" "}
        <b>promise</b> that resolves to an <b>object</b> containing{" "}
        <b>query parameters</b> after <b>?</b> in the URL. Useful for filters
        and sorting.
      </p>

      <CodeBlock
        code={`<div>
  <Link href="/articles/sport?lang=en">Read in English</Link>
  <Link href="/articles/sport?lang=pl">Read in Polish</Link>
</div>`}
      />

      <p>
        In the above example <b>sport</b> is a <b>dynamic route parameter</b>{" "}
        while <b>lang</b> is a <b>query parameter</b>.
      </p>

      <p>Let's create a page that reads both values:</p>

      <CodeBlock
        code={`export default async function Page({
  params,
  searchParams,
}) {
  const { article } = await params;
  const { lang } = await searchParams;

  return (
    <div>
      <p>Article: {article}</p>
      <p>Language: {lang}</p>
    </div>
  );
}`}
      />

      <p>Assuming the file structure looks like this:</p>

      <CodeBlock
        code={`app
└── articles
    └── [article]
        └── page.jsx`}
      />

      <p>and the user visits:</p>

      <CodeBlock code={`/articles/sport?lang=en`} />

      <p>the values received by the page will be:</p>

      <CodeBlock
        code={`params = {
  article: "sport"
}

searchParams = {
  lang: "en"
}`}
      />

      <p>
        Use <b>params</b> when a value is part of the route itself. Examples:
        article id, product slug, username, category name.
      </p>

      <p>
        Use <b>searchParams</b> when a value is optional and controls how data
        is displayed. Examples: language selection, sorting, pagination,
        filtering, search queries.
      </p>

      <CodeBlock
        code={`// Dynamic route
/products/laptop

params = {
  slug: "laptop"
}

// Query parameters
/products/laptop?sort=price&order=asc

searchParams = {
  sort: "price",
  order: "asc"
}`}
      />

      <p>A good rule of thumb is:</p>

      <ul>
        <li>
          <b>params</b> identify <i>what resource</i> the user is viewing.
        </li>
        <li>
          <b>searchParams</b> determine <i>how that resource is displayed</i>.
        </li>
      </ul>
    </div>
  );
};

export default ParamsEn;
