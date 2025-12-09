import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { BarChart3, LineChart, PieChart } from "lucide-react";

export type ChartType = "bar" | "line" | "pie";

interface ChartHeaderProps {
  title: string;
  subtitle?: string;
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
  threshold: string;
  onThresholdChange: (value: string) => void;
}

const ChartHeader = ({
  title,
  subtitle,
  chartType,
  onChartTypeChange,
  threshold,
  onThresholdChange,
}: ChartHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* Threshold Filter */}
        <div className="w-full sm:w-auto">
          <Input
            type="number"
            placeholder="Min threshold..."
            value={threshold}
            onChange={(e) => onThresholdChange(e.target.value)}
            className="w-full sm:w-40"
          />
        </div>
        
        {/* Chart Type Switcher */}
        <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
          <Button
            variant="chart"
            size="sm"
            isActive={chartType === "bar"}
            onClick={() => onChartTypeChange("bar")}
            title="Bar Chart"
          >
            <BarChart3 className="h-4 w-4" />
          </Button>
          <Button
            variant="chart"
            size="sm"
            isActive={chartType === "line"}
            onClick={() => onChartTypeChange("line")}
            title="Line Chart"
          >
            <LineChart className="h-4 w-4" />
          </Button>
          <Button
            variant="chart"
            size="sm"
            isActive={chartType === "pie"}
            onClick={() => onChartTypeChange("pie")}
            title="Pie Chart"
          >
            <PieChart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ChartHeader };
