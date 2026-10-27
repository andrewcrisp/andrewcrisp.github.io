"use client";
import { Bars, House, ChartTreemap, Briefcase } from "@gravity-ui/icons";
import { Drawer, Link } from "@heroui/react";

import { Button } from "@heroui/react";

import { ComponentType, SVGProps } from "react";
import { usePathname } from "next/navigation.js";
import { Url } from "next/dist/shared/lib/router/router.js";

function Navbar() {
  const navItems: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    route: string;
  }[] = [
    { icon: House, label: "Home", route: "/" },
    // { icon: Briefcase, label: "Résumé", route: "resume" },
    // { icon: ChartTreemap, label: "Portfolio", route: "portfolio" },
  ];
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;
  return (
    <Drawer>
      <div className="flex flex-row w-full px- justify-end bg-transparent">
        <Button variant="secondary">
          <Bars />
          Menu
        </Button>
      </div>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    <Link href={item.route}>{item.label}</Link>
                  </button>
                ))}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}

export default Navbar;
