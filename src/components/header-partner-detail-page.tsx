"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { PartnerItem } from "@/utils/type";
import { useRouter } from "next/navigation";

export default function HeaderPartnerDetailPage({
  partner,
}: {
  partner: PartnerItem | undefined;
}) {
  const router = useRouter();

  return (
    <header>
      <div
        className="flex items-center mb-2 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2" />
        <p className="text-sm text-zinc-950">Api partenaires</p>
      </div>
      <div className="flex items-center">
        <div className="border shadow  min-w-10 max-w-10 min-h-10 max-h-10 mr-2 flex items-center justify-center rounded-md">
          <Image
            src={`/img/${partner!.logo.name}.svg`}
            alt={partner!.logo.name}
            width={partner!.logo.width}
            height={partner!.logo.height}
          />
        </div>
        <div>
          <p className="text-xl text-zinc-950">{partner?.title}</p>
          <p className="text-sm text-zinc-600">{partner?.description}</p>
        </div>
      </div>
    </header>
  );
}
