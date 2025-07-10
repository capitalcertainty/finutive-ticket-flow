import { Plus } from "lucide-react";
import { TicketCard, Ticket } from "./TicketCard";
import { cn } from "@/lib/utils";

interface KanbanColumnProps {
  title: string;
  tickets: Ticket[];
  count: number;
  color?: "primary" | "warning" | "info" | "success";
  status: Ticket["status"];
  onTicketMove: (ticketId: string, newStatus: Ticket["status"]) => void;
}

const colorClasses = {
  primary: "bg-primary text-primary-foreground",
  warning: "bg-warning text-warning-foreground", 
  info: "bg-info text-info-foreground",
  success: "bg-success text-success-foreground"
};

export function KanbanColumn({ title, tickets, count, color = "primary", status, onTicketMove }: KanbanColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const ticketId = e.dataTransfer.getData("text/plain");
    onTicketMove(ticketId, status);
  };

  return (
    <div 
      className="flex-1 min-w-80 bg-muted/30 rounded-lg p-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-foreground">{title}</h2>
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium min-w-6 text-center",
            colorClasses[color]
          )}>
            {count}/{tickets.length}
          </span>
        </div>
        <button className="p-1 hover:bg-accent rounded transition-colors">
          <Plus className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Cards Container */}
      <div className="space-y-3 min-h-96">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        
        {/* Add Card Button */}
        <button className="w-full border-2 border-dashed border-border hover:border-accent-foreground transition-colors rounded-lg p-4 text-muted-foreground hover:text-accent-foreground flex items-center justify-center gap-2 group">
          <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-sm">Add a ticket</span>
        </button>
      </div>
    </div>
  );
}