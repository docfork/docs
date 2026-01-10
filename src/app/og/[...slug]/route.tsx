import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "@takumi-rs/image-response";
import type { Font } from "@takumi-rs/core";
import DocforkOG from "@/components/og-image";
import { readFile } from "fs/promises";
import { join } from "path";

export const revalidate = false;

// cache fonts at module level
let fontsCache: Font[] | null = null;

async function getFonts(): Promise<Font[]> {
  if (fontsCache) return fontsCache;

  // load Inter variable font from local file
  const fontsDir = join(process.cwd(), "public", "fonts");
  const interBuffer = await readFile(join(fontsDir, "Inter-Variable.woff2"));

  fontsCache = [
    {
      name: "Inter",
      data: interBuffer,
    },
  ];

  return fontsCache;
}

export async function GET(
  req: Request,
  { params }: RouteContext<"/og/[...slug]">
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  // construct absolute URL for logo
  const url = new URL(req.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const logoUrl = `${baseUrl}/icon.png`;

  // get cached fonts
  const fonts = await getFonts();

  return new ImageResponse(
    (
      <DocforkOG
        title={page.data.title}
        description={page.data.description}
        logoUrl={logoUrl}
      />
    ),
    {
      width: 1200,
      height: 630,
      format: "webp",
      fonts,
    }
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
