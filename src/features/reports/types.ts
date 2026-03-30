export interface Report {
  id: string;
  name: string;
  type: 'analytics' | 'financial' | 'performance' | 'custom';
  generatedAt: string;
  data: Record<string, unknown>;
}
