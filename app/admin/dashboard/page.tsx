"use client";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiFileText, FiMessageSquare } from "react-icons/fi";

type Article = {
  id: number;
  title: string;
  content: string;
};

type Comment = {
  id: number;
  articleId: number;
  content: string;
};

export default function Dashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const token = useAuthStore((state) => state.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
    // Fetch articles and comments
    // In production, replace this with API requests
    setArticles([
      { id: 1, title: "Introduction à Next.js", content: "Découvrez les bases de Next.js et ses fonctionnalités." },
      { id: 2, title: "Guide sur Tailwind CSS", content: "Un tutoriel complet pour styliser rapidement vos applications." },
    ]);
    setComments([
      { id: 1, articleId: 1, content: "Article très utile, merci!" },
      { id: 2, articleId: 2, content: "Excellent guide!" },
    ]);
  }, [token, router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Articles et Commentaires</h1>

      <Link href="/dashboard/add" className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">
        + Ajouter un article
      </Link>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Liste des articles</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Titre</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="border p-2">{article.title}</td>
                <td className="border p-2">
                  <Link href={`/dashboard/edit?id=${article.id}`} className="text-blue-500 cursor-pointer">
                    Modifier
                  </Link>
                  <button className="text-red-500 ml-4" onClick={() => { /* handle delete */ }}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Commentaires des clients</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Article</th>
              <th className="border p-2">Commentaire</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td className="border p-2">
                  {articles.find((article) => article.id === comment.articleId)?.title}
                </td>
                <td className="border p-2">{comment.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
