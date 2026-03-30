export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  assigneeId?: string;
  projectId?: string;
  createdAt: string;
  updatedAt: string;
}
