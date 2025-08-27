import styles from "./JobCard.module.css";

// Logo imports
import logo3 from "../images/account.svg";
import logo9 from "../images/eyecam-co.svg";
import logo6 from "../images/faceit.svg";
import logo8 from "../images/insure.svg";
import logo5 from "../images/loop-studios.svg";
import logo2 from "../images/manage.svg";
import logo4 from "../images/myhome.svg";
import logo1 from "../images/photosnap.svg";
import logo7 from "../images/shortly.svg";
import logo10 from "../images/the-air-filter-company.svg";

const logos = {
  "/images/photosnap.svg": logo1,
  "/images/manage.svg": logo2,
  "/images/account.svg": logo3,
  "/images/myhome.svg": logo4,
  "/images/loop-studios.svg": logo5,
  "/images/faceit.svg": logo6,
  "/images/shortly.svg": logo7,
  "/images/insure.svg": logo8,
  "/images/eyecam-co.svg": logo9,
  "/images/the-air-filter-company.svg": logo10,
};

const JobCard = ({ job, setFilter }) => {
  return (
    <div
      className={`${styles["job-card"]} ${job.featured && styles["featured"]}`}
    >
      <div className={styles["job-details"]}>
        <img src={logos[job.logo]} alt="" />
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
          return (
            <p
              key={`${job.id}-${tag}`}
              onClick={() =>
                setFilter((prevFilters) => {
                  const prev = new Set(prevFilters);
                  prev.add(tag);
                  return prev;
                })
              }
            >
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default JobCard;
