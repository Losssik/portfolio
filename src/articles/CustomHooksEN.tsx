import CodeBlock from "../components/CodeBlock/CodeBlock";

const CustomHooksEn = () => {
  return (
    <div className="article">
      <h1>Custom Hooks in React</h1>

      <p>
        <b>Custom hook</b> is a regular JavaScript function. Its name must start
        with <b>"use"</b>, just like all built-in React hooks, and it cannot
        return JSX.
      </p>

      <p>
        With a custom hook, you can create reusable <b>non-component</b>{" "}
        functions that return logic that can be shared across multiple
        components.
      </p>

      <h2>Why should you use custom hooks?</h2>

      <p>
        Without custom hooks, developers often end up duplicating the same logic
        in many different components. This makes the code harder to maintain and
        increases the risk of bugs.
      </p>

      <p>
        Custom hooks allow you to separate business logic from the UI layer and
        keep your components smaller and easier to read.
      </p>

      <h2>Rules of custom hooks</h2>

      <ul>
        <li>The function name must start with "use".</li>
        <li>Custom hooks can use other React hooks.</li>
        <li>Custom hooks cannot be called conditionally.</li>
        <li>They should only contain reusable logic.</li>
        <li>They don't return JSX.</li>
      </ul>

      <h2>Example</h2>

      <p>
        Imagine that several components need access to the browser window width.
        Instead of writing the same logic multiple times, you can create a
        custom hook called <b>useWindowWidth</b>.
      </p>

      <CodeBlock
        code={`const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};`}
      />

      <p>
        Now, any component can reuse this logic by simply calling the custom
        hook.
      </p>
      <CodeBlock
        code={`const Component = () => {
  const width = useWindowWidth();

  return <p>{width}px</p>;
};`}
      />
      <h2>Example 2</h2>

      <p>
        A common use case for custom hooks is fetching data from an API. If
        multiple components need to fetch data, instead of repeating the same{" "}
        <b>useState</b> and <b>useEffect</b> logic, you can create a reusable{" "}
        <b>useFetch</b> hook.
      </p>

      <CodeBlock
        code={`const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`}
      />

      <CodeBlock
        code={`const Users = () => {
  const { data, loading, error } = useFetch(
    "https://api.example.com/users"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`}
      />
    </div>
  );
};

export default CustomHooksEn;
