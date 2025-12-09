# Sales Dashboard

A modern, responsive sales dashboard application built with React, TypeScript, and TailwindCSS. Features interactive charts powered by Recharts with the ability to switch between bar, line, and pie chart views.

![Sales Dashboard](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-blue) ![Recharts](https://img.shields.io/badge/Recharts-2.15-green)

## Features

- 📊 **Interactive Charts** - Bar, Line, and Pie chart views
- 🎯 **Sales Threshold Filter** - Filter data by minimum sales value
- 📈 **Year-over-Year Comparison** - Compare sales across 2022, 2023, and 2024
- 💡 **Summary Statistics** - Quick overview cards with growth indicators
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean design with smooth animations

## Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button.tsx   # Reusable button component
│   │   └── Input.tsx    # Reusable input component
│   ├── molecules/       # Composite components
│   │   ├── ChartHeader.tsx   # Chart controls header
│   │   └── StatCard.tsx      # Statistics card
│   └── organisms/       # Complex components
│       └── SalesChart.tsx    # Main chart component
├── data/
│   └── sales.ts         # Mock sales data
├── pages/
│   └── Dashboard.tsx    # Main dashboard page
└── ...
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Usage

### Switching Chart Types
Click on the chart type icons (bar, line, pie) in the header to switch between different visualizations.

### Filtering Data
Enter a minimum sales value in the threshold input to filter out months with lower sales numbers.

### Understanding the Data
- **2022**: Base year data
- **2023**: Shows growth compared to 2022
- **2024**: Shows continued growth with percentage increase

## Mock Data

Sales data is located in `src/data/sales.ts`. The data includes monthly sales figures for 2022, 2023, and 2024 with realistic seasonal patterns (higher sales in Q4/holiday season).

## Customization

### Adding New Years
Update the `salesData` array in `src/data/sales.ts` and modify the chart components to include additional data keys.

### Changing Colors
Chart colors are defined in `src/index.css` using CSS variables:
- `--chart-1`: 2022 data color (cyan)
- `--chart-2`: 2023 data color (purple)
- `--chart-3`: 2024 data color (green)

## License

MIT License - feel free to use this project for learning or commercial purposes.
