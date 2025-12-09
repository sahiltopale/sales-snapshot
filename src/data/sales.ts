// Mock sales data for 2022, 2023, 2024
// Data inspired by retail industry patterns

export interface SalesData {
  month: string;
  year2022: number;
  year2023: number;
  year2024: number;
}

export const salesData: SalesData[] = [
  { month: "Jan", year2022: 45000, year2023: 52000, year2024: 61000 },
  { month: "Feb", year2022: 38000, year2023: 48000, year2024: 55000 },
  { month: "Mar", year2022: 52000, year2023: 59000, year2024: 68000 },
  { month: "Apr", year2022: 61000, year2023: 71000, year2024: 82000 },
  { month: "May", year2022: 55000, year2023: 65000, year2024: 78000 },
  { month: "Jun", year2022: 67000, year2023: 78000, year2024: 92000 },
  { month: "Jul", year2022: 72000, year2023: 84000, year2024: 98000 },
  { month: "Aug", year2022: 69000, year2023: 81000, year2024: 95000 },
  { month: "Sep", year2022: 58000, year2023: 69000, year2024: 83000 },
  { month: "Oct", year2022: 75000, year2023: 88000, year2024: 105000 },
  { month: "Nov", year2022: 89000, year2023: 102000, year2024: 125000 },
  { month: "Dec", year2022: 98000, year2023: 115000, year2024: 142000 },
];

export interface YearlySummary {
  year: string;
  total: number;
  average: number;
  growth: number;
}

export const getYearlySummary = (): YearlySummary[] => {
  const total2022 = salesData.reduce((sum, d) => sum + d.year2022, 0);
  const total2023 = salesData.reduce((sum, d) => sum + d.year2023, 0);
  const total2024 = salesData.reduce((sum, d) => sum + d.year2024, 0);

  return [
    {
      year: "2022",
      total: total2022,
      average: Math.round(total2022 / 12),
      growth: 0,
    },
    {
      year: "2023",
      total: total2023,
      average: Math.round(total2023 / 12),
      growth: Math.round(((total2023 - total2022) / total2022) * 100),
    },
    {
      year: "2024",
      total: total2024,
      average: Math.round(total2024 / 12),
      growth: Math.round(((total2024 - total2023) / total2023) * 100),
    },
  ];
};
