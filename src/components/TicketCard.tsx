import { Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Ticket {
  id: string;
  name: string;
  status: "open" | "in-progress" | "review" | "done";
  chatbot: string;
  createdAt: string;
  lastMessageAt: string;
  priority?: "low" | "medium" | "high";
}

interface TicketCardProps {
  ticket: Ticket;
  isDragging?: boolean;
}

const priorityColors = {
  low: "bg-info",
  medium: "bg-warning", 
  high: "bg-destructive"
};

export function TicketCard({ ticket, isDragging = false }: TicketCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-lg p-4 shadow-card hover:shadow-hover transition-all duration-200 cursor-grab active:cursor-grabbing border border-border",
        isDragging && "rotate-3 scale-105 shadow-hover"
      )}
      draggable
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
            {ticket.id.slice(0, 8)}...
          </span>
          {ticket.priority && (
            <div className={cn("w-2 h-2 rounded-full", priorityColors[ticket.priority])} />
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">
        {ticket.name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
        {ticket.chatbot}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-3 h-3" />
          <span>{new Date(ticket.lastMessageAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
}