import { NavContent } from "@/components/nav-content";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  dashboard: [
    {
      title: "Tableau de bord",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Propects",
          icon: "dashboard-prospects",
          url: "#",
          isActive: false,
        },
        {
          title: "Activités",
          icon: "dashboard-activities",
          url: "#",
          isActive: false,
        },
      ],
    },
  ],
  settings: [
    {
      title: "Paramètres",
      url: "#",
      isActive: true,
      items: [
        {
          title: "SMS",
          url: "#",
          isActive: true,
        },
        {
          title: "Activités",
          url: "#",
          isActive: false,
        },
        {
          title: "Statistiques",
          url: "#",
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="bg-[#EFEFEE] pr-0 pl-1">
      <SidebarHeader className="bg-[#EFEFEE] pl-3 pb-4 pt-8">
        <Image src="/img/lead-logo.svg" alt="logo" width={66} height={24} />
      </SidebarHeader>
      <SidebarContent className="bg-[#EFEFEE]">
        <NavContent items={data.dashboard} />
        <NavContent items={data.settings} />
      </SidebarContent>
    </Sidebar>
  );
}
