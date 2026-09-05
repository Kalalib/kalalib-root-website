type CurseForgeSearchResult = {
  data?: Array<{
    slug?: string;
    downloadCount?: number;
  }>;
};

const CURSEFORGE_GAME_ID = 432;

export async function getCurseForgeDownloadCount(
  slug: string,
  fallback: number,
): Promise<number> {
  const apiKey = process.env.CURSEFORGE_API_KEY;

  if (!apiKey) {
    return fallback;
  }

  const url = new URL("https://api.curseforge.com/v1/mods/search");
  url.searchParams.set("gameId", String(CURSEFORGE_GAME_ID));
  url.searchParams.set("slug", slug);

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    return fallback;
  }

  const payload = (await response.json()) as CurseForgeSearchResult;
  const mod = payload.data?.find((entry) => entry.slug === slug);

  return mod?.downloadCount ?? fallback;
}
