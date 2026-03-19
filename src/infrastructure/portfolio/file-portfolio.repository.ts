import { promises as fs } from "node:fs";
import path from "node:path";
import type { PortfolioProfile } from "@/domain/portfolio";

const PORTFOLIO_FILE_PATH = path.join(process.cwd(), "src/content/portfolio.json");

export async function readPortfolioProfile(): Promise<PortfolioProfile> {
  const raw = await fs.readFile(PORTFOLIO_FILE_PATH, "utf8");
  return JSON.parse(raw) as PortfolioProfile;
}

export async function writePortfolioProfile(profile: PortfolioProfile): Promise<void> {
  await fs.writeFile(PORTFOLIO_FILE_PATH, `${JSON.stringify(profile, null, 2)}\n`, "utf8");
}
