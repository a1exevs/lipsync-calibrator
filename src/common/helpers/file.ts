export function getExtensionByFile(file: File): string {
  return file.name.split('.').pop()?.toLowerCase() ?? '';
}

export function getFileData(file: File): { fileName: string; extension: string } {
  const extension = getExtensionByFile(file);
  const fileName = file.name;
  return { fileName: fileName.substring(0, fileName.length - extension.length - 1), extension };
}
