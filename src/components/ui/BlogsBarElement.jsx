export default function BlogsBarElement({ children, title }) {
  return (
    <div className="bg-second p-4 rounded-2xl space-y-6">
      <h2 className="text-main-900 text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
