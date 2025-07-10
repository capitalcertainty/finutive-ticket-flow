import { useState } from "react";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanHeader } from "./KanbanHeader";
import { Ticket } from "./TicketCard";

// Sample ticket data based on the finutive platform
const sampleTickets: Ticket[] = [
  {
    id: "0cc4f961-4b",
    name: "test",
    status: "open",
    chatbot: "bu_stg_01jqny85cbmnhycarbdxk9zy7n",
    createdAt: "2025-07-10T11:28:38Z",
    lastMessageAt: "2025-07-10T11:28:38Z",
    priority: "medium"
  },
  {
    id: "17c926df-69",
    name: "test",
    status: "open", 
    chatbot: "Test contacto principal",
    createdAt: "2025-07-10T10:39:28Z",
    lastMessageAt: "2025-07-10T10:39:28Z",
    priority: "low"
  },
  {
    id: "6c3ecdaf-20",
    name: "prueba",
    status: "in-progress",
    chatbot: "bu_stg_01jqny85cbmnhycarbdxk9zy7n",
    createdAt: "2025-07-10T10:28:43Z",
    lastMessageAt: "2025-07-10T10:28:43Z",
    priority: "high"
  },
  {
    id: "6db80caf-4",
    name: "prueba",
    status: "in-progress",
    chatbot: "bu_stg_01jqny85cbmnhycarbdxk9zy7n",
    createdAt: "2025-07-10T10:05:03Z",
    lastMessageAt: "2025-07-10T10:05:03Z"
  },
  {
    id: "9237bb57-81",
    name: "asd",
    status: "review",
    chatbot: "bu_stg_01jqny85cbmnhycarbdxk9zy7n",
    createdAt: "2025-07-10T10:04:46Z",
    lastMessageAt: "2025-07-10T10:04:46Z",
    priority: "medium"
  },
  {
    id: "fb45b0b1-3c",
    name: "saltos",
    status: "review",
    chatbot: "Test contacto existente",
    createdAt: "2025-07-10T09:54:18Z",
    lastMessageAt: "2025-07-10T09:54:18Z"
  },
  {
    id: "b45e1482-d",
    name: "Impuestos finales",
    status: "done",
    chatbot: "2025031Test11",
    createdAt: "2025-07-10T08:48:54Z",
    lastMessageAt: "2025-07-10T08:48:54Z",
    priority: "low"
  },
  {
    id: "4ffb003d-331",
    name: "Impuestos finales",
    status: "done",
    chatbot: "bu_stg_01jqny85cbmnhycarbdxk9zy7n",
    createdAt: "2025-07-09T18:05:19Z",
    lastMessageAt: "2025-07-09T18:05:19Z"
  }
];

export function KanbanBoard() {
  const [tickets, setTickets] = useState<Ticket[]>(sampleTickets);
  
  const handleTicketMove = (ticketId: string, newStatus: Ticket["status"]) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => 
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  // Group tickets by status
  const todoTickets = tickets.filter(t => t.status === "open");
  const inProgressTickets = tickets.filter(t => t.status === "in-progress");
  const reviewTickets = tickets.filter(t => t.status === "review");
  const doneTickets = tickets.filter(t => t.status === "done");

  return (
    <div className="flex-1 flex flex-col bg-background min-h-screen">
      <KanbanHeader totalResults={sampleTickets.length} />
      
      <div className="flex-1 p-6 bg-white">
        <div className="flex gap-6 overflow-x-auto pb-6">
          <KanbanColumn
            title="To Do"
            tickets={todoTickets}
            count={todoTickets.length}
            color="primary"
            status="open"
            onTicketMove={handleTicketMove}
          />
          <KanbanColumn
            title="In Progress"
            tickets={inProgressTickets}
            count={inProgressTickets.length}
            color="warning"
            status="in-progress"
            onTicketMove={handleTicketMove}
          />
          <KanbanColumn
            title="Review"
            tickets={reviewTickets}
            count={reviewTickets.length}
            color="info"
            status="review"
            onTicketMove={handleTicketMove}
          />
          <KanbanColumn
            title="Done"
            tickets={doneTickets}
            count={doneTickets.length}
            color="success"
            status="done"
            onTicketMove={handleTicketMove}
          />
        </div>
      </div>
    </div>
  );
}