import Image from "next/image";

/**
 * MARA HOUSE logo component.
 *
 * variant="dark"  — dark wordmark, for use on light/cream backgrounds
 * variant="light" — light wordmark, for use on dark/image backgrounds
 */
export default function MaraLogo({
  variant = "light",
  width = 160,
  height = 40,
  className = "",
}: {
  variant?: "dark" | "light";
  width?: number;
  height?: number;
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/images/mara-logo-light.png"
      : "/images/mara-logo.png";

  return (
    <Image
      src={src}
      alt="MARA HOUSE"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
