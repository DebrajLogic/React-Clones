import "./InputOption.css";

import PhotoIcon from "@mui/icons-material/Photo";
function InputOption({
  Icon = { PhotoIcon },
  title = "title",
  color = "gray",
}) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
