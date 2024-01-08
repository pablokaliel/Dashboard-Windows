"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

      while ((match = imageRegex.exec(readmeContent)) !== null) { imageUrls.push(match[1]); }
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
        const response = await fetch( "https://api.github.com/users/pablokaliel/repos?per_page=100" );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        const projects = data.filter((repo: { topics: string[] }) => {
          return repo.topics && repo.topics.includes("landingpage");
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
    getUserInfo();
  }, []);

  return (
    <main className="flex px-2 flex-col h-full bg-[#272727]">
      <div className=" ">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <div className="grid grid-cols-5 place-content-center gap-2">
              {repos.map((repo, index) => (
                <>
                  {repo.images.map((imageUrl, imageIndex) => (
                    <div
                      className="hover:bg-white/30 max-h-[200px] max-w-[200px] p-2"
                      key={`${index}-${imageIndex}`}
                    >
                      <Image
                        src={imageUrl}
                        alt={`Imagem ${imageIndex + 1}`}
                        width={200}
                        height={200}
                        objectFit="cover"
                      />
                      <div
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span className="text-sm">{repo.name}</span>
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
