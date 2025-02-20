import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  function handleSubmit(e: string) {
    setSearch(e);
    navigate(`/?filtre=${e}`);
  }

  return (
    <div className="SearchBar">
      <form action="">
        <input
          type="text"
          placeholder="recherche"
          value={search}
          onChange={(e) => handleSubmit(e.target.value)}
        />
      </form>
    </div>
  );
}
