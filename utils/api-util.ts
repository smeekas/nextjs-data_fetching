import fs from "fs/promises";
import path from "path";
import type { eventData } from "../types/EventData";
export async function getAllData() {
  const filePath = path.join(process.cwd(), "data", "backend.json");
  const jsonData = await fs.readFile(filePath);
  const data: eventData[] = JSON.parse(jsonData.toString());
  return data;
}
