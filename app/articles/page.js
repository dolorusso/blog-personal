"use client"
import { supabase } from "@/app/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Función para obtener los artículos
async function getArticles() {
  const { data, error } = await supabase
    .from("articulos")
    .select("id, title, excerpt, image_url, category, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Hubo un error al cargar los artículos.");
  }

  return data;
}

// Función para obtener categorías únicas
async function getCategories(articles) {
  const categories = new Set();
  articles.forEach(article => {
    if (article.category) categories.add(article.category);
  });
  return ["Todos", ...Array.from(categories)];
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Cargar artículos y categorías
  useEffect(() => {
    async function loadData() {
      const articlesData = await getArticles();
      const categoriesData = await getCategories(articlesData);
      setArticles(articlesData);
      setCategories(categoriesData);
    }

    loadData();
  }, []);

  // Filtrado por categoría
  const filteredArticles = selectedCategory === "Todos"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mt-10 mb-8">
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-full"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500">No hay artículos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Link href={`/articles/${article.id}`} className="block">
                <div className="relative w-full h-40">
                  <Image
                    src={article.image_url || "/placeholder.jpg"}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
              </Link>
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800">{article.title}</h2>
                <p className="text-gray-600 text-xs mb-2">{article.excerpt}</p>
                <p className="text-xs font-medium text-gray-600 mb-1">
                  Categoría: {article.category || "Sin categoría"}
                </p>
                <p className="text-gray-500 font-medium text-xs">
                  Fecha de publicación: {new Date(article.created_at).toLocaleDateString()}
                </p>
                <Link
                  href={`/articles/${article.id}`}
                  className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-[#3a6868] to-[#4ab5c4] text-white font-semibold text-xs rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
