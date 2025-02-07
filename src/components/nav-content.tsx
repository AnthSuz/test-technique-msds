import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function NavContent({
  items,
}: {
  items: {
    title: string;
    url: string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      isActive: boolean;
      icon?: string;
    }[];
  }[];
}) {
  return items.map((item) => (
    <Collapsible
      key={item.title}
      title={item.title}
      defaultOpen
      className="group/collapsible"
    >
      <SidebarGroup className="pr-0">
        <SidebarGroupLabel
          asChild
          className={`text-xs ${
            item.items && item.items[0].isActive ? "mb-2" : ""
          } text-zinc-600 font-semibold pr-0`}
        >
          <CollapsibleTrigger className="pr-0">
            {item.title}
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0">
              {item.items &&
                item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`${
                        item.title === "SMS"
                          ? "bg-neutral-200 rounded-lg text-zinc-950"
                          : "text-zinc-600"
                      } text-base font-medium`}
                    >
                      {item.icon && (
                        <Image src={`/img/${item.icon}.svg`} width={20} height={20} alt={item.icon} />
                      )}
                      <a href={item.url} className="py-1.5">
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  ));
}
