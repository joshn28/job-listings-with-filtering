import styles from "./FilterBar.module.css";
import removeIcon from "../images/icon-remove.svg";

const FilterBar = ({ filters, setFilter }) => {
  return (
    <div
      className={styles["filter-bar"]}
      style={{ visibility: filters.size > 0 ? "visible" : "hidden" }}
    >
      <div className={styles["filters"]}>
        {Array.from(filters).map((filter) => {
          return (
            <div className={styles["filter-tag"]} key={filter}>
              <p>{filter}</p>
              <input
                type="image"
                alt=""
                src={removeIcon}
                onClick={(e) =>
                  setFilter((prevFilters) => {
                    const prev = new Set(prevFilters);
                    prev.delete(e.target.previousSibling.textContent);
                    return prev;
                  })
                }
              />
            </div>
          );
        })}
      </div>
      <button onClick={() => setFilter(() => new Set())}>Clear</button>
    </div>
  );
};

export default FilterBar;
