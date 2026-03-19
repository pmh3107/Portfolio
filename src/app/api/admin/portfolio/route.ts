import { NextResponse } from "next/server";
import type { PortfolioProfile } from "@/domain/portfolio";
import { getPortfolioProfile, updatePortfolioProfile } from "@/application/portfolio/portfolio.service";

function isPortfolioPayload(payload: unknown): payload is PortfolioProfile {
  if (!payload || typeof payload !== "object") return false;
  const data = payload as Record<string, unknown>;
  return (
    typeof data.name === "string" &&
    typeof data.contact === "object" &&
    data.contact !== null &&
    Array.isArray(data.links) &&
    Array.isArray(data.skills) &&
    Array.isArray(data.experience) &&
    Array.isArray(data.education)
  );
}

export async function GET() {
  const profile = await getPortfolioProfile();
  return NextResponse.json(profile);
}

export async function PUT(request: Request) {
  try {
    const payload = (await request.json()) as unknown;
    if (!isPortfolioPayload(payload)) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    await updatePortfolioProfile(payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Could not update profile" }, { status: 500 });
  }
}
