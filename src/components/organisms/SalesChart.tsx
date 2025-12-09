import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartHeader, ChartType } from "@/components/molecules/ChartHeader";
import { salesData, SalesData } from "@/data/sales";

const COLORS = {
  year2022: "hsl(var(--chart-1))",
  year2023: "hsl(var(--chart-2))",
  year2024: "hsl(var(--chart-3))",
};

const PIE_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
      <p className="font-medium text-foreground mb-2">{label}</p>
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-medium text-foreground">
            ${entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

const SalesChart = () => {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState("");

  const filteredData = useMemo(() => {
    if (!threshold) return salesData;

    const thresholdValue = parseInt(threshold, 10);
    if (isNaN(thresholdValue)) return salesData;

    return salesData.filter(
      (item) =>
        item.year2022 >= thresholdValue ||
        item.year2023 >= thresholdValue ||
        item.year2024 >= thresholdValue
    );
  }, [threshold]);

  const pieData = useMemo(() => {
    const total2022 = filteredData.reduce((sum, d) => sum + d.year2022, 0);
    const total2023 = filteredData.reduce((sum, d) => sum + d.year2023, 0);
    const total2024 = filteredData.reduce((sum, d) => sum + d.year2024, 0);

    return [
      { name: "2022", value: total2022 },
      { name: "2023", value: total2023 },
      { name: "2024", value: total2024 },
    ];
  }, [filteredData]);

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="year2022"
                name="2022"
                stroke={COLORS.year2022}
                strokeWidth={2}
                dot={{ fill: COLORS.year2022, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="year2023"
                name="2023"
                stroke={COLORS.year2023}
                strokeWidth={2}
                dot={{ fill: COLORS.year2023, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="year2024"
                name="2024"
                stroke={COLORS.year2024}
                strokeWidth={2}
                dot={{ fill: COLORS.year2024, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={4}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                labelLine={{ stroke: "hsl(var(--muted-foreground))" }}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => `$${value.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="year2022"
                name="2022"
                fill={COLORS.year2022}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="year2023"
                name="2023"
                fill={COLORS.year2023}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="year2024"
                name="2024"
                fill={COLORS.year2024}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
      <ChartHeader
        title="Sales Overview"
        subtitle="Monthly sales comparison across years"
        chartType={chartType}
        onChartTypeChange={setChartType}
        threshold={threshold}
        onThresholdChange={setThreshold}
      />
      <div className="mt-6">{renderChart()}</div>
    </div>
  );
};

export { SalesChart };
