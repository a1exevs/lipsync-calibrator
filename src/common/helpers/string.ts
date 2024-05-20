import { Nullable } from 'src/common/types/common';

export function getFileExtensionByPath(path: string): Nullable<string> {
  // Check if there is a period in the path
  const periodIndex = path.lastIndexOf('.');
  const lastSlashIndex = path.lastIndexOf('/');

  // If no period is found, or the period is part of a directory (e.g., "/home/user/file.")
  // Return null
  if (periodIndex === -1 || periodIndex < lastSlashIndex) {
    return null;
  }

  // Extract and return the file extension
  const extension = path.substring(periodIndex + 1);
  return extension.length > 0 ? extension : null;
}
