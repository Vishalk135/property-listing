import { useState } from "react";
import Link from "next/link";
import { useProperty } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const { properties, deleteProperty } = useProperty();
  const [filter, setFilter] = useState("");

  const filtered = properties.filter((p) =>
    p.location.toLowerCase().includes(filter.toLowerCase()) ||
    p.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-4 md:mb-0"> Property Listings</h1>
        <Link href="/Add">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
            + Add New Property
          </button>
        </Link>
      </div>

      {/* Filter/Search Bar */}
      <div className="mb-6">
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((property) => (
            <div key={property.id} className="relative group">
              <PropertyCard property={property} />
              <button
                onClick={() => deleteProperty(property.id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg">No properties found.</p>
        )}
      </div>
    </div>
  );
}
