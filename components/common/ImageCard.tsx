import { GeneratedImageProps } from "@/interfaces";
import { Download, Trash2 } from "lucide-react";

interface ImageCardProps extends GeneratedImageProps {
  onDelete?: () => void;
  onDownload?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  prompt,
  onDelete,
  onDownload,
  action,
}) => {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-lg transition-all cursor-pointer"
      onClick={() => action?.(imageUrl)}
    >
      {/* Image */}
      <div className="aspect-square w-full bg-gray-100">
        <img
          src={imageUrl || "/placeholder.png"}
          alt={prompt || "Generated image"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        {onDownload && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDownload();
            }}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition"
            title="Download image"
          >
            <Download size={20} className="text-gray-800" />
          </button>
        )}
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition"
            title="Delete image"
          >
            <Trash2 size={20} className="text-red-500" />
          </button>
        )}
      </div>

      {/* Prompt below */}
      <div className="p-3 text-center">
        <p className="text-sm text-gray-800 font-medium line-clamp-2">{prompt}</p>
      </div>
    </div>
  );
};

export default ImageCard;
