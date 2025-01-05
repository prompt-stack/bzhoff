# Business Plan Financial Calculators

A comprehensive web application that helps entrepreneurs and business planners create detailed financial plans. Built with React and modern UI components, this tool provides interactive calculators for various aspects of business financial planning.

## Features

### 1. Startup Costs Calculator
- Calculate initial fixed assets with depreciation
- Track startup expenses and permits
- Plan operating money and emergency funds
- Save and compare multiple calculations

### 2. Source of Funds Calculator
- Track multiple funding sources:
  - Owner's equity
  - Outside investors
  - Bank loans
  - Lines of credit
- Automatic loan payment calculations
- Compare against startup costs

### 3. Cost of Sales Calculator
- Product cost breakdown
- Service pricing calculator
- Material cost tracking
- Profit margin analysis
- Save product/service templates

### 4. Sales Forecast Calculator
- 3-year sales projections
- Multiple product/service lines
- Monthly/Annual forecasting
- Growth rate calculations
- Visual data presentation

### 5. Workforce Calculator
- Employee salary planning
- Payroll tax calculations
- Benefits cost estimation
- Full-time and part-time staff planning

### 6. Operating Expenses Calculator
- Monthly expense tracking
- Annual projections
- Expense categorization
- Visual breakdown with charts

### 7. Financial Summary
- Comprehensive overview
- Key financial metrics
- Interactive reporting
- Cross-calculator data integration

## Smart Suggestions Feature

Built-in AI-powered suggestions for different business types:
- Restaurant-specific calculations
- Retail store estimates
- Industry-standard costs
- Customizable templates

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Technologies Used

- React 18
- Tailwind CSS
- Radix UI Components
- Recharts for data visualization
- Local Storage for data persistence

## Key Features

- 💾 Auto-save functionality
- 📊 Interactive charts and visualizations
- 🔄 Real-time calculations
- 📱 Responsive design
- 🎯 Industry-specific suggestions
- 💡 Helpful tooltips and guidance
- 📋 Save and load calculations

## Data Structure

The application uses a context-based state management system with the following structure:

```javascript
{
  startupCosts: {
    bigPurchases: [],
    startingCosts: [],
    operatingMoney: number
  },
  fundingSources: [],
  salesForecast: {
    year1: [],
    year2: [],
    year3: []
  },
  // ... other calculators
}
```

## Deployment

The application is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Built with ❤️ by [bzhoff](https://bzhoff.com)

## License

This project is licensed under the MIT License
