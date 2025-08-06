import PropertyForm from "../components/PropertyForm";

export default function Add() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
      <PropertyForm />
    </div>
  );
}
