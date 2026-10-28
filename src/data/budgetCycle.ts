export interface BudgetStage {
  id: string;
  stageName: string;
  deadline: string;
  legalFramework: string;
  description: string;
  citizenAction: string[];
}

export const KENYA_COUNTY_BUDGET_CYCLE: BudgetStage[] = [
  {
    id: "annual-development-plan",
    stageName: "Annual Development Plan (ADP)",
    deadline: "1 September",
    legalFramework: "Public Finance Management Act, section 126(3)",
    description:
      "The County Executive Committee member responsible for planning submits the county government's Annual Development Plan to the County Assembly for approval.",
    citizenAction: [
      "Review the proposed projects and priorities for your ward.",
      "Ask for project locations, expected outputs, costs, and delivery dates.",
      "Submit ward priorities to the County Treasury and Assembly before the plan is approved.",
    ],
  },
  {
    id: "cbrop",
    stageName: "County Budget Review and Outlook Paper (CBROP)",
    deadline: "30 September",
    legalFramework: "Public Finance Management Act, section 118(1)",
    description:
      "The County Treasury prepares the County Budget Review and Outlook Paper, reviewing the previous financial year's fiscal performance and updating the economic and budget outlook.",
    citizenAction: [
      "Compare approved plans with actual spending and service delivery.",
      "Ask about underspending, pending bills, county revenue, and incomplete projects.",
      "Send written questions and request supporting records where figures need explanation.",
    ],
  },
  {
    id: "county-fiscal-strategy-paper",
    stageName: "County Fiscal Strategy Paper (CFSP)",
    deadline: "28 February",
    legalFramework: "Public Finance Management Act, section 117(1)",
    description:
      "The County Treasury submits the County Fiscal Strategy Paper to the County Assembly, setting the county's fiscal framework, priorities, and sector expenditure ceilings.",
    citizenAction: [
      "Review the proposed sector priorities and expenditure ceilings.",
      "Identify services that need more or less funding and explain the local impact.",
      "Send written comments to the County Treasury and Assembly before adoption.",
    ],
  },
  {
    id: "budget-estimates",
    stageName: "Budget Estimates",
    deadline: "30 April",
    legalFramework: "Public Finance Management Act, section 129(2)",
    description:
      "The County Executive submits annual budget estimates to the County Assembly for consideration and approval before the start of the next financial year.",
    citizenAction: [
      "Attend an announced budget hearing or submit written comments before the deadline.",
      "Identify the relevant programme, ward project, or budget line.",
      "Explain the impact on residents and propose a practical allocation or change.",
    ],
  },
  {
    id: "county-finance-bill",
    stageName: "County Finance Bill",
    deadline: "Within 90 days after the Appropriation Bill is passed",
    legalFramework: "Public Finance Management Act, section 133(1)",
    description:
      "The County Finance Bill sets out county revenue-raising measures, including taxes, fees, and charges. The Act requires the Assembly to consider and approve it no later than 90 days after passing the Appropriation Bill.",
    citizenAction: [
      "Review proposed taxes, fees, and charges for affordability and local impact.",
      "Identify the exact charge and explain how it affects residents or businesses.",
      "Submit evidence-based changes to the Assembly before it votes on the Bill.",
    ],
  },
];
