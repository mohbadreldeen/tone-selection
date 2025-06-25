
import ToneCard from "./ToneCard";
const KOHCard = ({ tone, onClick }) => {
  return (
	<div className="koh-card" onClick={() => onClick(tone)}>
	  <ToneCard tone={tone} />
	</div>
  );
}

export default KOHCard;