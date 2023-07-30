
export function makeImagePath(id: string | null | undefined, format?: string): string {
  const simple = "assets/image/simple.png";
  if (id === "" || id === null || id === undefined) {
    return simple;
  } else {
    return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
  }
}

