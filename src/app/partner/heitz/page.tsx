import Image from "next/image";
import { dataPartnersPage } from "../../../utils/data";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MeetupDialog } from "@/components/modal/meetup";
import { PartnerCategory, PartnerItem } from "@/utils/type";
import HeaderPartnerDetailPage from "@/components/header-partner-detail-page";

export default function Page() {
  const heitz = dataPartnersPage
    .flatMap((category: PartnerCategory) => category.datas) // Récupère tous les items dans un seul tableau
    .find((item: PartnerItem) => item.title === "Heitz"); // Trouve "Heitz"

  return (
    <div className="content">
      <HeaderPartnerDetailPage partner={heitz} />
      <Separator className="my-6" />
      <Card>
        <CardHeader className="sm:flex-row">
          <div className="flex gap-6 w-full sm:w-3/5">
            <span>
              <p className="text-xs text-zinc-500 font-medium uppercase">
                Website
              </p>
              <p className="text-sm text-zinc-950 ">heitz.com</p>
            </span>
            <span>
              <p className="text-xs text-zinc-500 font-medium uppercase">Doc</p>
              <p className="text-sm text-zinc-950 ">Docs</p>
            </span>
            <span>
              <p className="text-xs text-zinc-500 font-medium uppercase">
                Build by
              </p>
              <p className="text-sm text-zinc-950 ">Lead</p>
            </span>
          </div>
          <div className="w-full sm:w-2/5" style={{ marginTop: "0px" }}>
            <MeetupDialog />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-2">
          <Image
            src="/img/first-img.jpeg"
            alt="neon"
            width={500}
            height={500}
            className="w-full sm:w-1/2 rounded h-[185px] object-cover"
          />
          <Image
            src="/img/second-img.jpeg"
            alt="neon"
            width={500}
            height={500}
            className="w-full sm:w-1/2 rounded h-[185px] object-cover"
          />
        </CardContent>
        <CardFooter className="flex-col items-start">
          <p className="text-sl text-zinc-950 mb-1.5">Résumé</p>
          <p className="text-sm text-zinc-600">
            Index pricing is straightforward. The page supports monthly and
            yearly plans, three different pricing tiers, and an additional
            enterprise solution for big corporations and large teams.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
