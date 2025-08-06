export default function PropertyCard({ property }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-1">{property.title}</h2>
        <p className="text-sm text-white mb-2">{property.location}</p>
        <p className="text-white mb-2">{property.description}</p>
        <div className="flex justify-between items-center text-sm text-white">
          <span>₹ {property.price.toLocaleString()}</span>
          <span className="bg-gray-200 px-2 py-1 rounded text-black">{property.type}</span>
        </div>
      </div>
    </div>
  );
}
