import { supabase } from "@/lib/supabase";
import Image from "next/image";
import ReactMarkdown from "react-markdown"; 
import remarkGfm from "remark-gfm"; 

export const revalidate = 0;

export default async function ArticlePage({ params }) {
  const { id } = params;
  const { data, error } = await supabase
    .from("articulos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return <p>Hubo un error al cargar el artículo.</p>;
  }

  if (!data) {
    return <p>Artículo no encontrado.</p>;
  }


  const renderers = {
    paragraph: (props) => <p className="text-gray-400 mb-16">{props.children}</p>,
    heading: (props) => <h2 className="text-2xl font-semibold text-[#4e8994]">{props.children}</h2>,
    link: (props) => <a href={props.href} className="text-blue-500 underline">{props.children}</a>,
    image: (props) => (
      <div className="relative mb-6">
        <Image
          src={props.src}
          alt={props.alt || ""}
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>
    )
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-[#4e8994] mt-16 mb-2">{data.title}</h1>
      <p className="text-gray-400 mb-4">{data.excerpt}</p>
      <p className="text-gray-400 text-sm  mb-1"> 📌Categoría: {data.category}</p>
      <p className="text-gray-400 text-sm mb-8">
        Fecha de publicación: {new Date(data.created_at).toLocaleDateString()}
      </p>

      <div className="relative mb-10">
        <Image
          src={data.image_url || "/placeholder.jpg"}
          alt={data.title}
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="article-content text-white">
        <ReactMarkdown
          children={data.content}
          remarkPlugins={[remarkGfm]} 
          components={renderers} 
        />
      </div>
    </div>
  );
}
