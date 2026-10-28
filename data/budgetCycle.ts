export interface BudgetStage {
  id: string;
  stageName: string;
  deadline: string; // MM-DD format for annual recurring dates
  monthIndex: number; // 0-11 for date logic
  legalFramework: string;
  description: string;
  citizenAction: string;
  memoType: 'ADP' | 'CBROP' | 'CFSP' | 'ESTIMATES' | 'FINANCE_BILL';
}

export const KENYA_COUNTY_BUDGET_CYCLE: BudgetStage[] = [
  {
    id: 'adp',
    stageName: 'Annual Development Plan (ADP)',
    deadline: '09-01',
    monthIndex: 8,
    legalFramework: 'PFM Act Section 126',
    description: 'The County Executive tables the 1-year extract of the 5-year County Integrated Development Plan (CIDP) in the County Assembly.',
    citizenAction: 'Demand inclusion of specific ward-level infrastructure, health, and water projects before sector allocation.',
    memoType: 'ADP'
  },
  {
    id: 'cbrop',
    stageName: 'County Budget Review & Outlook Paper (CBROP)',
    deadline: '09-30',
    monthIndex: 8,
    legalFramework: 'PFM Act Section 118',
    description: 'Reviews previous financial year performance, audits revenues, and sets preliminary sector expenditure ceilings.',
    citizenAction: 'Audit project completion rates in your ward and challenge under-expenditure or missing funds.',
    memoType: 'CBROP'
  },
  {
    id: 'cfsp',
    stageName: 'County Fiscal Strategy Paper (CFSP)',
    deadline: '02-28',
    monthIndex: 1,
    legalFramework: 'PFM Act Section 117',
    description: 'Sets the total budget ceiling for each county department (Health, Roads, Agriculture) for the upcoming year.',
    citizenAction: 'Submit memorandums to County Assembly Budget Committee to adjust department allocations.',
    memoType: 'CFSP'
  },
  {
    id: 'estimates',
    stageName: 'County Budget Estimates',
    deadline: '04-30',
    monthIndex: 3,
    legalFramework: 'PFM Act Section 129',
    description: 'Detailed project and program-level budget proposals. Assemblies hold formal public hearings during May.',
    citizenAction: 'Attend public hearings and submit line-item memorandums against wasted funds or ghost projects.',
    memoType: 'ESTIMATES'
  },
  {
    id: 'finance_bill',
    stageName: 'County Finance Bill',
    deadline: '09-30',
    monthIndex: 8,
    legalFramework: 'Article 209 & PFM Act',
    description: 'Enacts revenue-raising measures, local taxation, trade licenses, land rates, and market fees.',
    citizenAction: 'Challenge excessive business permits, parking fees, or double-taxation on small traders.',
    memoType: 'FINANCE_BILL'
  }
];