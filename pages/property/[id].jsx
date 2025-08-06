import { useRouter } from "next/router";
import { useProperty } from "../../data/properties";

export default function PropertyDetails() {
  const { query, push } = useRouter();
  const { id } = query;
  const { properties, deleteProperty } = useProperty();

  if (!properties || properties.length === 0) {
    return <div>Loading...</div>;
  }

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleDelete = () => {
    deleteProperty(id);
    push("/"); 
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-gray-700 mt-2">{property.description}</p>
      <p className="mt-2">Location: {property.location}</p>
      <p className="mt-2">Price: ₹{property.price}</p>

      <button
        onClick={handleDelete}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Delete Property
      </button>
    </div>
  );
}
