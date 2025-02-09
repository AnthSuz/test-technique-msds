"use client";

import { PartnerItem } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function CardPartner({ partner }: { partner: PartnerItem }) {
  const router = useRouter();
  return (
    <div
      className="p-4 border border-zinc-200 rounded-md cursor-pointer"
      onClick={() => router.push(`/partner/${partner.link}`)}
    >
      <div className="flex items-center mb-4">
        <div className="border shadow  min-w-10 min-h-10 mr-2 flex items-center justify-center rounded-md">
          <Image
            src={`/img/${partner.logo.name}.svg`}
            alt={partner.logo.name}
            width={partner.logo.width}
            height={partner.logo.height}
            className={`${
              partner.logo.name === "facebook" ? "rounded-md" : ""
            }`}
          />
        </div>
        <p className="text-sm text-zinc-950 font-medium">{partner.title}</p>
      </div>
      <p className="text-sm text-zinc-600">{partner.description}</p>
    </div>
  );
}
