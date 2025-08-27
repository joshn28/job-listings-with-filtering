import styles from "./JobCard.module.css";

const JobCard = ({ job, setFilter }) => {
  return (
    <div
      className={`${styles["job-card"]} ${job.featured && styles["featured"]}`}
    >
      <div className={styles["job-details"]}>
        <img src={new URL(job.logo, import.meta.url).href} alt="" />
        <div>
          <div className={styles["job-details-top"]}>
            <p>{job.company}</p>
            {job.new && <p>NEW!</p>}
            {job.featured && <p>FEATURED</p>}
          </div>
          <p className={styles["job-title"]}>{job.position}</p>
          <div className={styles["job-details-bottom"]}>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      <hr className={styles["mobile"]} />
      <div className={styles["tags"]}>
        {[job.role, job.level, ...job.languages, ...job.tools].map((tag) => {
          return <p key={`${job.id}-${tag}`} onClick={() => setFilter(prevFilters => {
            const prev = new Set(prevFilters);
            prev.add(tag);
            return prev;
          })}>{tag}</p>;
        })}
      </div>
    </div>
  );
};

export default JobCard;
