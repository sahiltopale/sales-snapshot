import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  subtitle?: string;
  className?: string;
}

const StatCard = ({ title, value, change, subtitle, className }: StatCardProps) => {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div
      className={cn(
        "p-5 rounded-xl bg-card border border-border/50 shadow-sm",
        "hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        {change !== undefined && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full",
              isPositive
                ? "text-chart-success bg-chart-success/10"
                : "text-destructive bg-destructive/10"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};

export { StatCard };
