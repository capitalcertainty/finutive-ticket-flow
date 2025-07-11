import { Search, Filter, FileDown, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface KanbanHeaderProps {
  totalResults: number;
}

export function KanbanHeader({ totalResults }: KanbanHeaderProps) {
  return (
    <div className="bg-white border-b border-border p-6">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-foreground">Tickets</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search tickets..."
              className="pl-10 w-80 bg-primary/10 border-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {totalResults.toLocaleString()} results
          </span>
          <Button variant="outline" size="sm">
            <FileDown className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}