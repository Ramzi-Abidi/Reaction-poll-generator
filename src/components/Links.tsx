import { Link, useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();

  return (
    <div className="links">
      <nav>
        <ul>
          <li
            className="link"
            style={{
              background:
                location.pathname === "/text-poll"
                  ? "#c9e3fa54"
                  : "transparent",
            }}
          >
            <Link to="/text-poll" style={{ padding: 5 }}>
              Text poll
            </Link>
          </li>
          <li
            className="link"
            style={{
              background:
                location.pathname === "/image-poll"
                  ? "#c9e3fa54"
                  : "transparent",
            }}
          >
            <Link to="/image-poll" style={{ padding: 5 }}>
              Images poll
            </Link>
          </li>
          <li
            className="link"
            style={{
              background:
                location.pathname === "/text-formatter"
                  ? "#c9e3fa54"
                  : "transparent",
            }}
          >
            <Link to="/text-formatter" style={{ padding: 5 }}>
              Text formatter
            </Link>
          </li>
          <li
            className="link"
            style={{
              background:
                location.pathname === "/characters-counter"
                  ? "#c9e3fa54"
                  : "transparent",
            }}
          >
            <Link to="/characters-counter" style={{ padding: 5 }}>
              Characters counter
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Links;
