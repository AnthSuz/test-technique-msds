"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dataPartnersPage } from "../../utils/data";

export default function Page() {
  const router = useRouter();

  return (
    <div className="content">
      <h1 className="text-2xl text-zinc-950 font-medium">API partenaires</h1>
      <p className="text-sm text-zinc-500">Manage you automatisation</p>
      <Separator className="my-6" />
      {dataPartnersPage.map((item, index) => (
        <div key={`${item.title}-${index}`}>
          <h6 className="text-xs text-zinc-500font-medium mb-4 uppercase">
            {item.title}
          </h6>
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mb-6">
            {item.datas.map((data) => (
              <div
                key={`${data.title}-${index}`}
                className="p-4 border border-zinc-200 rounded-md cursor-pointer"
                onClick={() => router.push(`/partner/${data.link}`)}
              >
                <div className="flex items-center mb-4">
                  <div className="border shadow  min-w-10 min-h-10 mr-2 flex items-center justify-center rounded-md">
                    <Image
                      src={`/img/${data.logo.name}.svg`}
                      alt={data.logo.name}
                      width={data.logo.width}
                      height={data.logo.height}
                      className={`${
                        data.logo.name === "facebook" ? "rounded-md" : ""
                      }`}
                    />
                  </div>
                  <p className="text-sm text-zinc-950 font-medium">
                    {data.title}
                  </p>
                </div>
                <p className="text-sm text-zinc-600">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
