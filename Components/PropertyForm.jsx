import { useState } from "react";
import { useRouter } from "next/router";
import { useProperty } from "../data/properties";

export default function PropertyForm() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "",
    price: "",
    description: ""
  });

  const router = useRouter();
  const { addProperty } = useProperty();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty({ ...form, price: parseInt(form.price) });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["title", "location", "type", "price", "description"].map(field => (
        <input
          key={field}
          type="text"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Property</button>
    </form>
  );
}
