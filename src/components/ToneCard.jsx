const ToneCard = ({tone}) => {
	const { image, name } = tone;

 
	return (
		<div className="bg-white shadow-md rounded-lg p-4   w-full">
			<img src={`assets/images/${image}`} alt={name} className="w-full h-90  object-cover rounded" draggable={false} style={{ pointerEvents: "none" }}/>
			<h3 className="text-black font-bold pt-3" draggable={false} style={{ pointerEvents: "none" }}>{name}</h3>
		</div>
	)
}
export default ToneCard;