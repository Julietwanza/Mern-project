import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Learn more
        </a>
      )}
    </div>
  );
}
