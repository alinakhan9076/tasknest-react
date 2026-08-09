function SearchBar ({ searchQuery, onSearchChange }) {
    return (
        <input type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tasks..."
        />
    );
}

export default SearchBar;