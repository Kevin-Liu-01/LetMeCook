import React from "react";

export default function DietaryTags({ dietary }: { dietary: string[] }) {
  const tagStyles: Record<string, { bg: string; text: string }> = {
    vegetarian: { bg: "bg-green-500", text: "text-green-950" },
    vegan: { bg: "bg-blue-500", text: "text-blue-900" },
    "gluten-free": { bg: "bg-purple-500", text: "text-purple-950" },
    eggetarian: { bg: "bg-yellow-500", text: "text-yellow-950" },
    pescatarian: { bg: "bg-red-500", text: "text-red-950" },
    keto: { bg: "bg-indigo-500", text: "text-indigo-950" },
    paleo: { bg: "bg-pink-500", text: "text-pink-950" },
  };

  return (
    <div className="mt-2 flex space-x-2">
      {dietary?.map((tag) => (
        <span
          key={tag.toLowerCase()}
          className={`rounded-full px-2 py-1 text-sm ${
            tagStyles[tag.toLowerCase()]?.bg ?? "bg-gray-500"
          } ${tagStyles[tag.toLowerCase()]?.text ?? "text-gray-950"}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
