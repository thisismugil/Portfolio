import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "javascript",
  "java",
  "python",
  "react",
  "html5",
  "css3",
  "vercel",
  "git",
  "github",
  "tailwindcss",
  "visualstudiocode",
  "figma",
  "mongodb",
  "flask",
  "django",
  "postman",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
      <style jsx>{`
        /* Custom styles for specific icons */
        .icon-github {
          filter: brightness(0) invert(1); /* Inverts the color to white */
        }
        .icon-django {
          filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(90deg); /* Custom color */
        }
        .icon-flask {
          filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg); /* Custom color */
        }
      `}</style>
    </div>
  );
}
