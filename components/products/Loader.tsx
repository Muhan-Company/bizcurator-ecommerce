export default function Loader({ className }: { className?: string }) {
  return (
    <div className={`center ${className}`}>
      <div className="loader animate-spin"></div>
    </div>
  );
}
