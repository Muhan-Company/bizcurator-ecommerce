export default function Loader({ height = 'screen' }: { height?: string }) {
  return (
    <div className={`flex items-center justify-center h-${height}`}>
      <div className="loader animate-spin"></div>
    </div>
  );
}
