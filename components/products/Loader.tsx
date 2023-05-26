export default function Loader({ className = 'screen' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="loader animate-spin"></div>
    </div>
  );
}
