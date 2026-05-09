import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        fontSize: "1.4rem",
        marginBottom: "1rem",
        maxWidth: isMobile ? "300px" : "none",
        overflowX: isMobile ? "auto" : "visible",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
