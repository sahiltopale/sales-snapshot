import { SalesChart } from "@/components/organisms/SalesChart";
import { StatCard } from "@/components/molecules/StatCard";
import { getYearlySummary } from "@/data/sales";
import { BarChart3 } from "lucide-react";

const Dashboard = () => {
  const summary = getYearlySummary();

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
            </div>
            <p className="text-sm text-muted-foreground hidden sm:block">
              Sales Analytics Platform
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Sales Dashboard</h2>
          <p className="text-muted-foreground mt-1">
            Track your sales performance across 2022, 2023, and 2024
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {summary.map((yearData) => (
            <StatCard
              key={yearData.year}
              title={`Total Sales ${yearData.year}`}
              value={formatCurrency(yearData.total)}
              change={yearData.growth || undefined}
              subtitle={`Avg: ${formatCurrency(yearData.average)}/month`}
            />
          ))}
        </div>

        {/* Sales Chart */}
        <SalesChart />

        {/* Footer Info */}
        <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border/30">
          <p className="text-sm text-muted-foreground text-center">
            💡 <span className="font-medium">Tip:</span> Use the threshold filter to show only months with sales above a certain value. Switch between chart types using the icons.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
