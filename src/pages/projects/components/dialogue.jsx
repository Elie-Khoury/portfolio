import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { Github } from "lucide-react";

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen("paper")}>
        <h2>More Details</h2>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {props.title}
          <a href={props.url} target="_blank">
            <Github size={20} className="github-icon" />
          </a>
        </DialogTitle>
        <DialogContent id="scroll-dialog-content" dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {props.description.split("\n").map((line, index) => (
              <span
                key={index}
                style={{
                  display: "block",
                  marginTop: line.startsWith("-") ? "1em" : "0",
                  marginBottom: line.startsWith("-") ? "1em" : "0",
                }}
              >
                {line}
              </span>
            ))}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

ScrollDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};
