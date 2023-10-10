import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("Learing React", "10 projects completed till date")}
      {newsArticle("Learned JavaScript", "11 projects completed till date")}
      {newsArticle(
        "Adding TailWind CSS",
        "Learned to use Tailwind CSS in projects"
      )}
    </div>
  );
}

export default Widgets;
