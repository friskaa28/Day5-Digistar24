export const Card2 = ({ image, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-50 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};
