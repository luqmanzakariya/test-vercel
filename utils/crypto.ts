// utils/crypto.ts
import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const SECRET_KEY = "12345678901234567890123456789012";
const IV = crypto.randomBytes(16); // Initialization vector

export const encrypt = (data: string): string => {
  const jsonData = JSON.stringify(data);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), IV);
  let encrypted = cipher.update(jsonData, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return IV.toString("hex") + ":" + encrypted;
};

export const decrypt = (data: string): string => {
  if (!data) return "{}";

  const [ivHex, encrypted] = data.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
  let decrypted = decipher.update(encrypted, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return JSON.parse(decrypted);
};
