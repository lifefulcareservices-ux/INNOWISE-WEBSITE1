import DitherGradient from "./DitherGradient";

export default function CtaBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <DitherGradient colors={["#2E1047", "#4A236F", "#9333EA"]} />
    </div>
  );
}
