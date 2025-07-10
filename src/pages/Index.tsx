import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { KanbanBoard } from "@/components/KanbanBoard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("tickets");

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "tickets" && <KanbanBoard />}
      {activeTab !== "tickets" && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-muted-foreground">This section is coming soon!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
