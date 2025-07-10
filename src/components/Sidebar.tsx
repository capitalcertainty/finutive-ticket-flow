import { Ticket, Users, Eye, Building } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "tickets", label: "Tickets", icon: Ticket },
  { id: "views", label: "Views", icon: Eye },
  { id: "users", label: "Users", icon: Users },
  { id: "organizations", label: "Organizations", icon: Building },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-primary text-primary-foreground h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-primary-light">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">fi</span>
          </div>
          <span className="text-xl font-semibold">finutive</span>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="px-2 py-1 bg-primary-light rounded-md text-xs font-medium">MANAGE</span>
          <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">DEV</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                    activeTab === item.id
                      ? "bg-primary-foreground text-primary font-medium"
                      : "hover:bg-primary-light"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-light">
        <span className="text-sm opacity-75">finutive empresas</span>
      </div>
    </div>
  );
}