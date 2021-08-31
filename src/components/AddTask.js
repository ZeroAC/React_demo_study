import { useState } from "react";
import TextField from "@material-ui/core/TextField";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <TextField id="filled-basic" label="Task title" variant="outlined" fullWidth="true" margin="dense" value={text}
          onChange={(e) => setText(e.target.value)} />
      
      <TextField id="filled-basic" label="time" variant="outlined" margin="dense" fullWidth="true" value={day}
    onChange={(e) => setDay(e.target.value)}/>
  
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
