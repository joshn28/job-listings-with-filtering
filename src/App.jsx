import data from "../data.json";
import { useState } from "react";

/** Component Imports */
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [filters, setFilters] = useState(() => new Set());

  return (
    <>
      <div className="bg-header"></div>
      <FilterBar filters={filters} setFilter={setFilters} />
      <main>
        {data.map((job) => {
          if (!filters.size) {
            return <JobCard job={job} key={job.id} setFilter={setFilters} />;
          } else {
            const tags = [job.role, job.level, ...job.languages, ...job.tools];
            for (const filter of filters) {
              if (!tags.includes(filter)) {
                return null;
              }
            }
            return <JobCard job={job} key={job.id} setFilter={setFilters} />;
          }
        })}
      </main>
    </>
  );
};

export default App;
