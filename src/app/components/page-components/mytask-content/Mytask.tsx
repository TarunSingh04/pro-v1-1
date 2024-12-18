import React, { useState } from "react";
import styles from "./styles.module.scss";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import sectionHeaderIcon from "../../assets/sectionNameIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import DeleteIcon from "../../assets/delete.svg";
import { DateInput } from "./date-select/DateSelect";
import Checkbox from "./checkbox/CheckBox";

const Mytask_data = [
  {
    taskId: 0,
    taskType: "critical",
    taskName: "Way forward to critical3",
    description:
      "This is a sample description for the task This is a sample description for the task",
    dueDate: { day: "29", month: "10", year: "2024" },
    tags: ["Environmental", "Social"],
    priority: "High",
    taskStatus: "Completed",
  },
  {
    taskId: 1,
    taskType: "critical",
    taskName: "Way forward to critical3",
    description:
      "This is a sample description for the task This is a sample description for the task",
    dueDate: { day: "29", month: "10", year: "2024" },
    tags: ["Environmental", "Social"],
    priority: "Low",
    taskStatus: "In progress",
  },
  {
    taskId: 2,
    taskType: "critical",
    taskName: "Way forward to critical3",
    description:
      "This is a sample description for the task This is a sample description for the task",
    dueDate: { day: "29", month: "10", year: "2024" },
    tags: ["Environmental", "Social"],
    priority: "Medium",
    taskStatus: "To Do",
  },
  // Other task objects...
];

const Mytask = () => {
  const [taskType, settaskType] = useState<string>("critical");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<any>({
    taskId: 0,
    taskType: "critical",
    taskName: "",
    description: "",
    dueDate: { day: "", month: "", year: "" },
    tags: [],
    priority: "High",
    taskStatus: "To Do",
    userId:""
  });
  const [tasks, setTasks] = useState<any>(Mytask_data);
  const [showStatusPopup, setShowStatusPopup] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [newStatus, setnewStatus] = useState<any>("");

  const ChangeTaskType = (taskname: any) => {
    settaskType(taskname);
  };

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleAddTask = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTask((prevTask: any) => ({ ...prevTask, [name]: value }));
  };

  const handleDateChange = (date: { day: string; month: string; year: string }) => {
    setNewTask((prevTask: any) => ({ ...prevTask, dueDate: date }));
  };

  const handlePriorityChange = (e: any) => {
    setNewTask({ ...newTask, priority: e.target.value });
  };

  const handleTagChange = (e: any) => {
    const { value } = e.target;
    const tags = [...newTask.tags];
    if (tags.includes(value)) {
      const index = tags.indexOf(value);
      tags.splice(index, 1);
    } else if (tags.length < 3) {
      tags.push(value);
    }
    setNewTask({ ...newTask, tags });
  };

  const handleSaveTask = () => {
    const newTaskWithId = { ...newTask, taskId: tasks.length + 1 };
    setTasks([...tasks, newTaskWithId]);
    setShowPopup(false);
    setNewTask({
      taskId: 0,
      taskType: "critical",
      taskName: "",
      dueDate: { day: "", month: "", year: "" },
      tags: [],
      priority: "High",
      taskStatus: "To Do",
    });
  };

  const onStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setnewStatus(event.target.value);
  };

  const handleTaskStatusChange = () => {
    if (selectedTaskId !== null && newStatus !== "") {
      const updatedTasks = tasks.map((task: any) => {
        if (task.taskId === selectedTaskId) {
          return { ...task, taskStatus: newStatus };
        }
        return task;
      });
      setTasks(updatedTasks);
      setShowStatusPopup(false);
      setSelectedTaskId(null);
      setnewStatus("");
    }
  };

  const handleStatusButtonClick = (taskId: number) => {
    setSelectedTaskId(taskId);
    setShowStatusPopup(true);
  };

  const handleDeleteTask = () => {
    if (selectedTaskId !== null) {
      const updatedTasks = tasks.filter((task: any) => task.taskId !== selectedTaskId);
      setTasks(updatedTasks);
      setShowStatusPopup(false);
      setSelectedTaskId(null);
    }
  };

  const filteredTasks = tasks.filter(
    (task: any) =>
      task.taskType === taskType &&
      task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTagColor = (tags: any) => {
    if (tags === "Environmental") {
      return "#34d399";
    } else if (tags === "Social") {
      return "#12467b";
    } else {
      return "#f59e0b";
    }
  };

  const getPriorityCol = (priority: any) => {
    if (priority === "High") {
      return "#FF5151";
    } else if (priority === "Medium") {
      return "#E8B500";
    } else {
      return "#E8B500";
    }
  };

  const getPriorityBackgroundCol = (priority: any) => {
    if (priority === "High") {
      return "#FFE9EC";
    } else if (priority === "Medium") {
      return "#FFFAE5";
    } else {
      return "#FFFAE5";
    }
  };

  const closeStatusPopUp = () => {
    setShowStatusPopup(false);
  };

  return (
    <div className={styles.myTask}>
      <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt="none" />
        <p>
          <span>/</span>My Tasks
        </p>
      </div>

      <div className={styles.mytasksubHeader}>
        <h2>My Tasks</h2>
        <p>Your Gateway to Sustainable Innovation and Global Change!</p>
      </div>

      <div className={styles.scorecardBody}>
        <div className={styles.scorecardsubcontbar}>
          <p onClick={() => ChangeTaskType("critical")}
             className={taskType === "critical" ? styles.boldScoreSection : styles.normalScoreSection}>
            Critical
          </p>
          <p onClick={() => ChangeTaskType("key")}
             className={taskType === "key" ? styles.boldScoreSection : styles.normalScoreSection}>
            Key
          </p>
          <p onClick={() => ChangeTaskType("supporting")}
             className={taskType === "supporting" ? styles.boldScoreSection : styles.normalScoreSection}>
            Supporting
          </p>
        </div>
      </div>

      <div className={styles.taskcontainer}>
        <div className={styles.searchcontainerHeader}>
          <h3>{taskType.charAt(0).toUpperCase() + taskType.slice(1)} Tasks</h3>

          <div className={styles.searchbar}>
            <Image src={searchIcon} width={26} height={26} alt="none" className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search tasks"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className={styles.contwrapper}>
          {["To Do", "In progress", "Completed"].map((status) => (
            <div className={styles.todoCont} key={status}>
              <h3>
                {status.charAt(0).toUpperCase() + status.slice(1)}
                {status === "To Do" && (
                  <div className={styles.AddTaskbtn} onClick={handleAddTask}>+ Add Task</div>
                )}
              </h3>
              {filteredTasks.map(
                (items: any) =>
                  items.taskStatus === status && (
                    <div key={items.taskId} className={styles.todoTaskscont}>
                      <div className={styles.leftItemscont}>
                        <div className={styles.leftItems}>
                          <h4>{items.taskName}</h4>
                          <p className={styles.description}>{items.description}</p>
                          <p className={styles.date}>Due date: {`${items.dueDate.day}/${items.dueDate.month}/${items.dueDate.year}`}</p>
                          <div className={styles.tags}>
                            {items.tags.map((tag: string, tagIndex: number) => (
                              <div className={styles.tagItems} key={tagIndex}>{tag}</div>
                            ))}
                          </div>
                        </div>
                        <button className={styles.statusBtn} onClick={() => handleStatusButtonClick(items.taskId)}>
                          <BsThreeDots />
                        </button>
                      </div>
                      <div className={styles.rightItems}>
                        <div className={styles.rightsubCont}>
                          <div className={styles.priorityStatus}>
                            Task priority :
                            <span style={{
                              background: getPriorityBackgroundCol(items.priority),
                              color: getPriorityCol(items.priority),
                            }} className={styles.prioritybtncol}>
                              {items.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className={styles.statusPopup}>
          <div className={styles.popupContent1}>
            <div className={styles.closeheader}>
              <MdClose className={styles.closeIcon} onClick={handleClosePopup} />
            </div>
            <p className={styles.title}>Add new task</p>
            <p className={styles.popupdescription}>Create a new task with details, deadlines, and priority to keep your projects on track.</p>
            <div className={styles.wrapperInputBox}>
              <p>Task Name</p>
              <input type="text" name="taskName" placeholder="Enter Task Name" value={newTask.taskName} onChange={handleInputChange} />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Task Description</p>
              <input type="text" name="description" placeholder="Enter description" value={newTask.description} onChange={handleInputChange} />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Due Date</p>
              <DateInput dateValue={newTask.dueDate} onDateChange={handleDateChange} />
            </div>
            <div className={styles.selectholderbox}>
              <div className={styles.selectcont}>
                <p>Task Type</p>
                <select name="taskType" className={styles.select} value={newTask.taskType} onChange={handleInputChange}>
                  <option value="">Select Task type</option>
                  <option value="critical">Critical Task</option>
                  <option value="key">Key Task</option>
                  <option value="supporting">Supporting Task</option>
                </select>
              </div>
              <div className={styles.selectcont}>
                <p>Task Priority</p>
                <select name="priority" className={styles.select} value={newTask.priority} onChange={handleInputChange}>
                  <option value="">Select Task priority</option>
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>
            </div>
            <div className={styles.tagsheader}>
              <p className={styles.lefttheader}>Select Tags</p>
              <p className={styles.rightheader}>Max. 3 Tags</p>
            </div>
            <div>
              <label>
                <Checkbox
                  value="Environmental"
                  checked={newTask.tags.includes("Environmental")}
                  onChange={handleTagChange}
                  label="Environmental"
                />
              </label>
              <label>
                <Checkbox
                  value="Social"
                  checked={newTask.tags.includes("Social")}
                  onChange={handleTagChange}
                  label="Social"
                />
              </label>
              <label>
                <Checkbox
                  value="Governance"
                  checked={newTask.tags.includes("Governance")}
                  onChange={handleTagChange}
                  label="Governance"
                />
              </label>
            </div>
            <div className={styles.addtaskbtn}>
              <button className={styles.button} onClick={handleSaveTask}>SAVE TASK</button>
            </div>
          </div>
        </div>
      )}

      {showStatusPopup && selectedTaskId !== null && (
        <div className={styles.statusPopup}>
          <div className={styles.popupContent}>
            <div className={styles.closeheader}>
              <MdClose className={styles.closeIcon} onClick={closeStatusPopUp} />
            </div>
            <p className={styles.title}>Change Task Status</p>
            <p className={styles.popupdescription}>Change task status</p>
            <div className={styles.selectContainer}>
              <p>Task Status</p>
              <select className={styles.select} onChange={onStatusChange}>
                <option value="">Select to change status</option>
                <option value={"To Do"}>To Do</option>
                <option value={"In progress"}>In Progress</option>
                <option value={"Completed"}>Completed</option>
              </select>
            </div>
            <div className={styles.btncont}>
              <button className={styles.button_danger} onClick={handleDeleteTask}>
                <Image src={DeleteIcon} width={19} height={19} alt="none" className={styles.deleteIcon} />
                DELETE TASK
              </button>
              <button className={styles.button} onClick={handleTaskStatusChange}>UPDATE TASK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mytask;
