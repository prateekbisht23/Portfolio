export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}
