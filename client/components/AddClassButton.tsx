import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ClassInfo } from "../interfaces/Classes";

const AddClassButton = () => {
  const [openAddClassModal, setOpenAddClassModal] = useState(false);
  const [form, setForm] = useState<Map<string, string>>(new Map());
  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleOpen = () => {
    setOpenAddClassModal(true);
    console.log("add a class button clicked");
  };

  const isDisabledCreate = () => {
    return !(
      "grade" in form &&
      "day" in form &&
      "start" in form &&
      "end" in form
    );
  };

  const handleCreate = () => {
    // Only allow class to be created if all info is given
    if ("grade" in form && "day" in form && "start" in form && "end" in form) {
      console.log("Form is");
      console.log(form);
      setForm(new Map());
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="Button violet"
          //   onClick={handleOpen}
        >
          Add a Class
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add a Class</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Please enter the details of your class.
          </Dialog.Description>
          <form>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="classGrade">
                Class Grade
              </label>
              <input
                type="number"
                className="Input"
                id="classGrade"
                min="7"
                max="10"
                onChange={(e) => setField("grade", e.target.value.toString())}
                required
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="classDay">
                Class Day
              </label>
              <select
                className="Input"
                id="classDay"
                defaultValue="Monday"
                onChange={(e) => setField("day", e.target.value)}
                required
              >
                <option value="" hidden>
                  Choose here
                </option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="classStartTime">
                Start Time
              </label>
              <input
                type="time"
                className="Input"
                id="classStartTime"
                onChange={(e) => {
                  setField("start", e.target.value);
                }}
                required
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="classEndTime">
                End Time
              </label>
              <input
                type="time"
                className="Input"
                id="classEndTime"
                onChange={(e) => setField("end", e.target.value)}
                required
              />
            </fieldset>
          </form>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                type="submit"
                className={isDisabledCreate() ? "Button gray" : "Button green"}
                onClick={handleCreate}
                disabled={isDisabledCreate()}
              >
                Create
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddClassButton;
