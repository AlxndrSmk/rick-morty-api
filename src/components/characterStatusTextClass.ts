export function characterStatusTextClass(status: string): string {
  const normalized = status.toLowerCase();
  if (normalized === "alive") {
    return "text-emerald-600";
  }
  if (normalized === "dead") {
    return "text-red-600";
  }
  return "text-slate-500";
}
