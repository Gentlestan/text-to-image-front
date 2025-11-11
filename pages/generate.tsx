import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ImageCard from "@/components/common/ImageCard";
import React, { useEffect, useState, useContext } from "react";
import { useApi } from "@/hooks/useApi";
import { AuthContext } from "@/context/AuthContext";

interface GeneratedImage {
  id: number;
  image_url: string;
  prompt: string;
  created_at: string;
}

const GeneratePage: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [latestImage, setLatestImage] = useState<GeneratedImage | null>(null);
  const [gallery, setGallery] = useState<GeneratedImage[]>([]);
  const { accessToken } = useContext(AuthContext);
  const { callApi, isLoading, error } = useApi();

  // 🧠 Fetch saved images on load
  useEffect(() => {
    if (!accessToken) return;
    const fetchImages = async () => {
      const images = await callApi<GeneratedImage[]>("/images/", {
        method: "GET",
      });
      if (images) setGallery(images);
    };
    fetchImages();
  }, [accessToken]);

  // ✨ Generate a new image
  const handleGenerateImage = async () => {
    if (!prompt.trim()) return alert("Enter a prompt before generating.");

    // Step 1: Generate image via backend API
    const generated = await callApi<{ image_url: string }>("/images/generate-image/", {
      method: "POST",
      data: { prompt },
    });

    if (!generated?.image_url) return alert("Failed to generate image.");

    // Step 2: Save to user's gallery in DB
    const saved = await callApi<GeneratedImage>("/images/", {
      method: "POST",
      data: { prompt, image_url: generated.image_url },
    });

    if (saved) {
      setLatestImage(saved);
      setGallery((prev) => [saved, ...prev]);
    }
  };

  // 🗑️ Delete image
  const handleDeleteImage = async (id: number) => {
    if (!confirm("Delete this image?")) return;
    const res = await callApi(`/images/${id}/`, { method: "DELETE" });
    if (res !== null) setGallery((prev) => prev.filter((img) => img.id !== id));
  };

  // ⬇️ Download image
  const handleDownload = (id: number, image_url: string) => {
    const link = document.createElement("a");
    link.href = image_url;
    link.setAttribute("download", `image_${id}.png`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        {/* Header and prompt input */}
        <div className="w-full max-w-md text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Generate Images</h1>
          <p className="text-gray-700 mb-4">
            Create beautiful AI images from your imagination ✨
          </p>

          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleGenerateImage}
            disabled={isLoading}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {isLoading ? "Generating..." : "Generate Image"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Latest generated image */}
        {latestImage && (
          <div className="mb-10">
            <ImageCard
              imageUrl={latestImage.image_url}
              prompt={latestImage.prompt}
              action={() => setLatestImage(null)}
            />
          </div>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="w-full max-w-5xl">
            <h3 className="text-xl font-semibold text-center mb-4">
              Your Generated Images
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {gallery.map((img) => (
                <ImageCard
                  key={img.id}
                  imageUrl={img.image_url}
                  prompt={img.prompt}
                  action={() => setLatestImage(img)}
                  onDelete={() => handleDeleteImage(img.id)}
                  onDownload={() => handleDownload(img.id, img.image_url)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default GeneratePage;
