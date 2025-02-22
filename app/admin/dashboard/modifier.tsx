"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditArticle() {
  const [title, setTitle] = useState("Article Title");
  const [content, setContent] = useState("Article content here...");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the article edit logic here (e.g., API call)
    router.push("/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Modifier l'article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenu"
          className="w-full p-2 mb-4 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
          Sauvegarder les modifications
        </button>
      </form>
    </div>
  );
}
