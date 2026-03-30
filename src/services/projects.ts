/**
 * Projects API service
 */

import type { PaginatedResponse, PaginationParams } from '@/types';
import apiService from './api';

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  startDate: string;
  endDate?: string;
  budget?: number;
  clientId?: string;
  teamMembers?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectInput {
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  budget?: number;
  clientId?: string;
}

export interface UpdateProjectInput extends Partial<CreateProjectInput> {
  status?: Project['status'];
  teamMembers?: string[];
}

export const projectsService = {
  async getProjects(params?: PaginationParams) {
    const queryParams = new URLSearchParams();
    if (params) {
      queryParams.append('page', params.page.toString());
      queryParams.append('limit', params.limit.toString());
      if (params.sortBy) queryParams.append('sortBy', params.sortBy);
      if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);
    }
    return apiService.get<PaginatedResponse<Project>>(`/projects?${queryParams}`);
  },

  async getProject(id: string) {
    return apiService.get<Project>(`/projects/${id}`);
  },

  async createProject(data: CreateProjectInput) {
    return apiService.post<Project>('/projects', data);
  },

  async updateProject(id: string, data: UpdateProjectInput) {
    return apiService.patch<Project>(`/projects/${id}`, data);
  },

  async deleteProject(id: string) {
    return apiService.delete<void>(`/projects/${id}`);
  },
};

export default projectsService;
