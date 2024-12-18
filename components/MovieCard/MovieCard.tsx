import Image from 'next/image';
import Link from 'next/link';
import { MovieCardProps } from './MovieCard.types';

export default function MovieCard({
  id,
  title,
  rating,
  cover,
  release,
}: MovieCardProps) {
  return (
    <Link href={`/movies/${id}`}>
      <div
        className="h-full bg-secondary-color rounded-lg overflow-hidden 
                      transition-transform hover:scale-105 cursor-pointer"
      >
        <div className="relative h-[300px]">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-2 text-lg">{title}</h3>
          <p className="text-text-secondary flex items-center gap-1">
            <span>⭐</span> {rating.toFixed(1)}
          </p>
          <p className="text-text-secondary">{release}</p>
        </div>
      </div>
    </Link>
  );
}
