function SearchBar ({ searchQuery, onSearchChange }) {
    return (
        <input className="mb-5 w-full rounded-lg border border-slate-300 px-4 py-3
        outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
         type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tasks..."
        />
    );
}

export default SearchBar;