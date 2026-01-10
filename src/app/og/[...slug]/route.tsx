import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "@takumi-rs/image-response";
import type { Font } from "@takumi-rs/core";
import DocforkOG from "@/components/og-image";
import { readFile } from "fs/promises";
import { join } from "path";

export const revalidate = false;

// cache fonts and logo at module level
let fontsCache: Font[] | null = null;
let logoDataUrl: string | null = null;

async function getFonts(): Promise<Font[]> {
  if (fontsCache) return fontsCache;

  // load inter variable font from local file
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

async function getLogoDataUrl(): Promise<string> {
  if (logoDataUrl) return logoDataUrl;

  // load logo as data url to avoid request-dependent URLs
  const logoPath = join(process.cwd(), "public", "icon.png");
  const logoBuffer = await readFile(logoPath);
  const base64 = logoBuffer.toString("base64");
  logoDataUrl = `data:image/png;base64,${base64}`;

  return logoDataUrl;
}

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/[...slug]">
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  // get cached fonts and logo
  const fonts = await getFonts();
  const logo = await getLogoDataUrl();

  return new ImageResponse(
    (
      <DocforkOG
        title={page.data.title}
        description={page.data.description}
        logoUrl={logo}
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
    slug: getPageImage(page).segments,
  }));
}
