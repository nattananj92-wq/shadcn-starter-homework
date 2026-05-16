export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
