function FilterBar ({ filter, onFilterChange }) {
    return (
        <div className="mb-4 flex flex-wrap gap-2">
            <button onClick={() => onFilterChange("all")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filter === "all" ?
                    "bg-blue-600 text-white"
                    :
                    "bg-slate-100 text-slate-700 hover:bg-slate-200"
                } ` }>
                All
            </button>

            <button onClick={() => onFilterChange("active")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filter === "active" ?
                    "bg-blue-600 text-white"
                    :
                    "bg-slate-100 text-slate-700 hover:bg-slate-200"
                } ` }>
                Active
            </button>

            <button onClick={() => onFilterChange("completed")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filter === "completed" ?
                    "bg-blue-600 text-white"
                    :
                    "bg-slate-100 text-slate-700 hover:bg-slate-200"
                } ` }>
                Completed
            </button>
        </div>
    );
}

export default FilterBar;