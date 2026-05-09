import { Link, Outlet } from "react-router-dom";
import { articlesMap } from "../data/articles";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

const categoryLabels: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  next: "Next.js",
  other: "Other",
};

const groupedArticles = Object.entries(articlesMap).reduce(
  (acc, [key, article]) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(key);
    return acc;
  },
  {} as Record<string, string[]>,
);

const Blog = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleCategoryToggle = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 950) {
      setShowMenu(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <div>
          <button className="menu" onClick={handleMenu}>
            menu
          </button>
          <Link to="/" className="home">
            <FaHome />
          </Link>

          {showMenu && (
            <ul className="menu__ul menu__ul--open">
              <Link to="/" className="home--pc">
                Home
              </Link>
              {Object.entries(groupedArticles).map(([category, articles]) => (
                <li key={category}>
                  <div
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      marginTop: "10px",
                      minWidth: "150px",
                    }}
                    onClick={() => handleCategoryToggle(category)}
                  >
                    {categoryLabels[category]}{" "}
                    {openCategory === category ? "▲" : "▼"}
                  </div>

                  {openCategory === category && (
                    <ul style={{ paddingLeft: "15px" }}>
                      {articles.map((title) => (
                        <li key={title}>
                          <Link to={`/blog/${title}`} onClick={handleLinkClick}>
                            {title.replaceAll("_", " ")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
