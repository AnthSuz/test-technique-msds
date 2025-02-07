import { ArrowLeft, Milk } from "lucide-react";
import Image from "next/image";
import { dataPartnersPage } from "../../../utils/data";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Logo {
  name: string;
  width: number;
  height: number;
}

interface PartnerItem {
  title: string;
  logo: Logo;
  description: string;
  link: string;
}

interface PartnerCategory {
  title: string;
  datas: PartnerItem[];
}

export default function Page() {
  const heitz = dataPartnersPage
    .flatMap((category: PartnerCategory) => category.datas) // Récupère tous les items dans un seul tableau
    .find((item: PartnerItem) => item.title === "Heitz"); // Trouve "Heitz"

  return (
    <div className="content">
      <div className="flex items-center mb-2">
        <ArrowLeft className="mr-2" />
        <p className="text-sm text-zinc-950">Api partenaires</p>
      </div>
      <div className="flex items-center">
        <div className="border shadow  min-w-10 max-w-10 min-h-10 max-h-10 mr-2 flex items-center justify-center rounded-md">
          <Image
            src={`/img/${heitz!.logo.name}.svg`}
            alt={heitz!.logo.name}
            width={heitz!.logo.width}
            height={heitz!.logo.height}
          />
        </div>
        <div>
          <p className="text-xl text-zinc-950">Heitz</p>
          <p className="text-sm text-zinc-600">
            Fais plein de trucs trop bien avec cette API partenaire
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <Card>
        <CardHeader className="flex-row">
          <div className="flex gap-6 w-3/5">
            <span>
              <p className="uppercase text-zinc-500 text-xs">Website</p>
              <p className="text-zinc-950 text-sm">heitz.com</p>
            </span>
            <span>
              <p className="uppercase text-zinc-500 text-xs">Doc</p>
              <p className="text-zinc-950 text-sm">Docs</p>
            </span>
            <span>
              <p className="uppercase text-zinc-500 text-xs">Build by</p>
              <p className="text-zinc-950 text-sm">Lead</p>
            </span>
          </div>
          <div className="w-2/5" style={{ marginTop: "0px" }}>
            <Button size={"sm"} className="float-right">
              <Milk />
              Prendre rendez-vous
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Image
            src="/img/first-img.jpeg"
            alt="neon"
            width={500}
            height={500}
            className="w-1/2 rounded h-[185px] object-cover"
          />
          <Image
            src="/img/second-img.jpeg"
            alt="neon"
            width={500}
            height={500}
            className="w-1/2 rounded h-[185px] object-cover"
          />
        </CardContent>
        <CardFooter className="flex-col items-start">
          <p className="mb-1.5 text-zinc-950 text-sl">Résumé</p>
          <p className="text-zinc-600 text-sm">
            Index pricing is straightforward. The page supports monthly and
            yearly plans, three different pricing tiers, and an additional
            enterprise solution for big corporations and large teams.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
