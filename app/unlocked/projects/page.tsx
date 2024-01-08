"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import folder from "../../../public/icons/explorer/Folder.svg";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  created_at: string;
  images: string[];
  language: string;
}

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchReadmeImages(owner: string, repo: string) {
    try {
      const readmeResponse = await fetch( `https://api.github.com/repos/${owner}/${repo}/readme` );
      if (!readmeResponse.ok) {
        throw new Error("Failed to fetch README.md");
      }
      const readmeData = await readmeResponse.json();
      const readmeContent = atob(readmeData.content);
      const imageRegex = /<img.*?src=["']([^"']+)["']/g;
      const imageUrls: string[] = [];
      let match;

      while ((match = imageRegex.exec(readmeContent)) !== null) {
        imageUrls.push(match[1]);
      }
      console.log("URLs das imagens encontradas:", imageUrls);

      return imageUrls;
    } catch (error) {
      console.error("Erro ao buscar imagens do README.md:", error);
      return [];
    }
  }

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch( "https://api.github.com/users/pablokaliel/repos" );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        const projects = data.filter((repo: { topics: string[] }) => {
          return repo.topics && repo.topics.includes("react");
        });

        const reposWithImages: Repo[] = [];
        for (const repo of projects) {
          const images = await fetchReadmeImages("pablokaliel", repo.name);
          reposWithImages.push({ ...repo, images });
        }
        setRepos(reposWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }
    setTimeout(() => {
      getUserInfo();
    }, 3000);
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  }
  return (
    <main className="flex px-2 flex-col h-full bg-[#272727] relative">
      <div className="h-full overflow-y-scroll">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="text-sm">
                <th className="text-left py-2">Nome</th>
                <th className="text-left py-2">Linguagem</th>
                <th className="text-left py-2">Data Criado</th>
                <th className="text-left py-2">Tag</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo, i) => (
                <tr className="text-sm hover:bg-white/30" key={i}>
                  <td className="py-2 flex gap-2">
                    <Image src={folder} alt="" />
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </td>
                  <td>{repo.language}</td>
                  <td className="py-2">{formatDate(repo.created_at)}</td>
                  <td
                    style={{
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    className="py-2"
                  >
                    {repo.topics.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
