import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { images } from "./site-data";

const originals = {
  "bathroom.jpeg": "bb430504b8a05ba8c1f2bc2ce496c99a87202e8b508329c939f98c6f3a539988",
  "bedroom.jpeg": "68db02579fd514307d71f8131ff628c881ca084c2c4620a6c46e96a79b6745e5",
  "bona-balcony.jpeg": "6b517dc7d6301be9d0e3eb71a058baf8c4f62e2c2db270127a249cff07747d3d",
  "bona-bedroom1.jpeg": "98b7961703e914c338cffae7cc97968da0ceceb7b766e6c586256048c06a0d4b",
  "bona-bedroom2.jpeg": "38c0c81dc1fbfaa9527d1281b0b00608ccaa52522ad7ce3d04591544002ad1c4",
  "bona-kitchen.jpeg": "f76aa337097b3ed09cd74db27616185c6dfe9c6eceade6dba6be4846d69261d1",
  "bona-living1.jpeg": "fe7d3235bb2e9472e472ad7000b69d1baebff9c9204de9c67e81cc84cbc6f397",
  "bona-living2.jpeg": "8b383182b6a6e39fa62986bc0d09577033e9db9dbf7af585312587422252646c",
  "bona-lounge.jpeg": "b754a3057fdf94cb7473d9a5055badebbe6f095cb8a8c2c4333e2ec20f1a9e6e",
  "bona-salon.jpeg": "7b9044775b5feb85ba2a6a53c00394a7cb7c0867f4b08e9560cbf8fe0f423638",
  "bona-suite1.jpeg": "1d95c82e0167fb55fad87e76a1ca977f1b99c7c2bf37ebb6b93ce1beb933fa9e",
  "kitchen1.jpeg": "421adc5bac25cee5fdb371008d814eebb48a643114eff640b591f3ee4f4f134d",
  "kitchen2.jpeg": "7bce0c6afa2669209c0115a48da2eedec851e39f69fcda672558c0858eb4ff0e",
  "living1.jpeg": "8e6ef9f7cd57bca740d4e5fb6bceda42b3e1c4f3fcc9a0fed6eb573994c601d0",
  "living2.jpeg": "ffd6ca9a9c7cd6cadd872de15df7c0d2ad46729e9f2d962f308d4ec0adb74ef1",
  "living3.jpeg": "e6595e8f48da0d1ab5a2f9a4fb73171b81e3faf606d2a4ea65cc2dfa86331dfc",
};

describe("Original local property photos", () => {
  test("all sixteen image paths point to local originals", () => {
    expect(Object.values(images).sort()).toEqual(Object.keys(originals).map((name) => `/images/${name}`).sort());
  });

  for (const [filename, sha256] of Object.entries(originals)) {
    test(`${filename} is byte-identical to its verified original`, () => {
      const data = readFileSync(new URL(`../../public/images/${filename}`, import.meta.url));
      expect(createHash("sha256").update(data).digest("hex")).toBe(sha256);
    });
  }
});