export default function InfoSite({
  webSite,
  doc,
  build,
}: {
  webSite: string;
  doc: string;
  build: string;
}) {
  return (
    <div className="flex gap-6 w-full sm:w-3/5">
      <span>
        <p className="text-xs text-zinc-500 font-medium uppercase">Website</p>
        <a href={webSite} className="text-sm text-zinc-950 ">
          {webSite}
        </a>
      </span>
      <span>
        <p className="text-xs text-zinc-500 font-medium uppercase">Doc</p>
        <p className="text-sm text-zinc-950 ">{doc}</p>
      </span>
      <span>
        <p className="text-xs text-zinc-500 font-medium uppercase">Build by</p>
        <p className="text-sm text-zinc-950 ">{build}</p>
      </span>
    </div>
  );
}
