import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import searchIcon from "../../../../assets/searchIcon.svg";
import TaskIcon from "../../../../assets/taskIcon.svg";

const TaskListData = [
  {
    taskName: "TaskName1",
    taskDescription: "This is a sample description for the task This is a sample description for the task",
    taskStatus: "Ongoing",
  },
  {
    taskName: "TaskName2",
    taskDescription: "This is a sample description for the task This is a sample description for the task",
    taskStatus: "Ongoing",
  },
  {
    taskName: "TaskName3",
    taskDescription: "This is a sample description for the task This is a sample description for the task",
    taskStatus: "Ongoing",
  },
  {
    taskName: "TaskName4",
    taskDescription: "This is a sample description for the task This is a sample description for the task",
    taskStatus: "Ongoing",
  },
  {
    taskName: "TaskName5",
    taskDescription: "This is a sample description for the task This is a sample description for the task",
    taskStatus: "Ongoing",
  },
  {
    taskName: "TaskName6",
    taskDescription: "This is a sample description for the task This is a sample description for the task",
    taskStatus: "Ongoing",
  },
];

const Inprogress = () => {
  const [search, setSearch] = useState("");
  const filteredTasks = TaskListData.filter((task) =>
    task.taskName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.Inprogress}>
      <div className={styles.tasksearchcont}>
        <div className={styles.searchbar}>
          <Image src={searchIcon} width={26} height={26} alt="none" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search tasks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.taskcont}>
        <p className={styles.taskHeader}>My Tasks</p>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((taskItems, index) => (
            <div key={index} className={styles.taskBox}>
              <div className={styles.taskboxleft}>
                <Image src={TaskIcon} width={24} height={24} alt="none" />
                <div className={styles.taskInfo}>
                  <p className={styles.taskBoxHeader}>{taskItems.taskName}</p>
                  <p className={styles.taskDesc}>{taskItems.taskDescription}</p>
                </div>
              </div>
              <div className={styles.taskTags}>{taskItems.taskStatus.toLowerCase()}</div>
            </div>
          ))
        ) : (
          <p className={styles.noTaskMessage}>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Inprogress;
