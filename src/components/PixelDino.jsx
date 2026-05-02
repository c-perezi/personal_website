import { useState, useEffect } from "react";

// Two frames for a walk cycle — a tiny T-Rex silhouette (16×16 grid)
const frames = [
  // Frame 0 — right leg forward
  [
    "......GGGGGG....",
    ".....GGGGGGGG...",
    ".....GGWGGGGG...",
    ".....GGGGGGGG...",
    ".....GGGG.......",
    "..G..GGGGGGG....",
    "..GG.GGGGGG.....",
    "...GGGGGG.......",
    "....GGGGG.......",
    "....GGGGGG......",
    "....GGGGG.......",
    ".....GGGG.......",
    ".....GG.GG......",
    ".....G...G......",
    ".....GG.........",
    "................",
  ],
  // Frame 1 — left leg forward
  [
    "......GGGGGG....",
    ".....GGGGGGGG...",
    ".....GGWGGGGG...",
    ".....GGGGGGGG...",
    ".....GGGG.......",
    "..G..GGGGGGG....",
    "..GG.GGGGGG.....",
    "...GGGGGG.......",
    "....GGGGG.......",
    "....GGGGGG......",
    "....GGGGG.......",
    ".....GGGG.......",
    ".....GG.GG......",
    "......G..G......",
    ".........GG.....",
    "................",
  ],
];

function renderFrame(frame, pixel, color, eyeColor) {
  const pixels = [];
  frame.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      let fill = null;
      if (ch === "G") fill = color;
      if (ch === "W") fill = eyeColor;
      if (fill) {
        pixels.push(
          <rect
            key={`${x}-${y}`}
            x={x * pixel}
            y={y * pixel}
            width={pixel}
            height={pixel}
            fill={fill}
          />
        );
      }
    });
  });
  return pixels;
}

/**
 * @param {Object} props
 * @param {string}  [props.color="#4ade80"]   - Body color
 * @param {string}  [props.eyeColor="#ffffff"] - Eye color
 * @param {number}  [props.pixel=4]           - Size of each pixel-art cell
 * @param {number}  [props.duration=8]        - Walk cycle duration in seconds
 * @param {number}  [props.delay=0]           - Animation delay in seconds
 * @param {boolean} [props.reverse=false]     - Walk right-to-left
 * @param {number}  [props.frameSpeed=320]    - ms between walk frames
 */
export default function PixelDino({
  color = "#4ade80",
  eyeColor = "#ffffff",
  pixel = 4,
  duration = 8,
  delay = 0,
  reverse = false,
  frameSpeed = 320,
}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % 2), frameSpeed);
    return () => clearInterval(id);
  }, [frameSpeed]);

  const width = 16 * pixel;
  const height = 16 * pixel;

  const style = {
    animation: `dino-walk ${duration}s linear ${delay}s infinite`,
    ...(reverse && { transform: "scaleX(-1)", animationDirection: "reverse" }),
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={style}
      aria-hidden="true"
      role="img"
    >
      {renderFrame(frames[frame], pixel, color, eyeColor)}
    </svg>
  );
}
