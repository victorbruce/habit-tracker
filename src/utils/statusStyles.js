export function getStatusClass(status) {
  const base = "status-card";
  switch (status.toLowerCase()) {
    case "todo":
      return `${base} status-todo`;
    case "progress":
      return `${base} status-progress`;
    case "completed":
      return `${base} status-completed`;
    default:
      return `${base}`;
  }
}
