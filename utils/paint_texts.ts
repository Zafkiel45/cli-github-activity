export function yellowTextColor(text: string): string {
  return `\x1b[33m${text}\x1b[0m`;
};

export function redTextColor(text: string): string {
  return `\x1b[31m${text}\x1b[0m`;
};