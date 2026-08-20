export default function SectionGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, #4A236F, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-16 w-[360px] h-[360px] rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "radial-gradient(circle, #9333EA, transparent 70%)" }}
      />
    </div>
  );
}
