import { Separator } from "@/components/ui/separator";
import CardPartner from "@/components/card-partner";
import { dataPartnersPage } from "../../utils/data";

export default function Page() {

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
              <CardPartner key={`${data.title}-${index}`} partner={data} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
