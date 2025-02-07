import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  const dataPartnersPage = [
    {
      title: "Acquisition",
      datas: [
        {
          title: "Facebook",
          logo: {
            name: "facebook",
            width: 40,
            height: 40,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
        {
          title: "Reserve with Google",
          logo: {
            name: "google",
            width: 24,
            height: 24,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
      ],
    },
    {
      title: "Gestion club",
      datas: [
        {
          title: "Heitz",
          logo: {
            name: "heitz",
            width: 32,
            height: 32,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
        {
          title: "Résamania V2",
          logo: {
            name: "resamania",
            width: 32,
            height: 32,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
        {
          title: "Deciplus",
          logo: {
            name: "deciplus",
            width: 32,
            height: 32,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
      ],
    },
    {
      title: "Agence marketing",
      datas: [
        {
          title: "Click Funnels",
          logo: {
            name: "funnels",
            width: 28.01,
            height: 23.36,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
        {
          title: "Funnelo",
          logo: {
            name: "funelo",
            width: 36,
            height: 36,
          },
          description: "Réserve avec google et fais plein de trucs trop bien.",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="content">
      <h1 className="text-2xl font-medium text-zinc-950">API partenaires</h1>
      <p className="text-sm text-zinc-500">Manage you automatisation</p>
      <Separator className="my-6" />
        {dataPartnersPage.map((item, index) => (
          <div key={`${item.title}-${index}`}>
            <h6 className="mb-4 uppercase text-zinc-500 text-xs">
              {item.title}
            </h6>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mb-6">
              {item.datas.map((data) => (
                <div
                  key={`${data.title}-${index}`}
                  className="p-4 border border-zinc-200 rounded-md cursor-pointer"
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
                    <p className="text-sm text-zinc-950">{data.title}</p>
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
