import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form className="search-container glass-panel" onSubmit={handleSubmit}>
      <Search className="search-icon" size={20} />
      <input
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </form>
  );
};

export default SearchBar;
