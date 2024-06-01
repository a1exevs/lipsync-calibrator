export function getExtensionByFile(file: File): string {
  return file.name.split('.').pop()?.toLowerCase() ?? '';
}
