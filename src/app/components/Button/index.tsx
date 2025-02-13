export default function Button({
  children,
  className = "",
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      className={`bg-primary rounded-full text-white font-bold h-auto p-2 uppercase ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
