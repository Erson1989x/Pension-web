interface CursorGlowProps {
  mousePosition: { x: number; y: number };
}

const CursorGlow = ({ mousePosition }: CursorGlowProps) => (
  <div
    className="fixed pointer-events-none z-30 mix-blend-difference"
    style={{
      left: mousePosition.x - 10,
      top: mousePosition.y - 10,
    }}
  >
    <div className="w-5 h-5 bg-white rounded-full opacity-50" />
  </div>
);

export default CursorGlow;
