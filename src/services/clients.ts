/**
 * Clients API service
 */

import type { User, PaginatedResponse, PaginationParams } from '@/types';
import apiService from './api';

export interface Client extends User {
  company?: string;
  phone?: string;
  address?: string;
  status: 'active' | 'inactive' | 'pending';
}

export interface CreateClientInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  address?: string;
}

export interface UpdateClientInput extends Partial<CreateClientInput> {
  status?: Client['status'];
}

export const clientsService = {
  async getClients(params?: PaginationParams) {
    const queryParams = new URLSearchParams();
    if (params) {
      queryParams.append('page', params.page.toString());
      queryParams.append('limit', params.limit.toString());
      if (params.sortBy) queryParams.append('sortBy', params.sortBy);
      if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);
    }
    return apiService.get<PaginatedResponse<Client>>(`/clients?${queryParams}`);
  },

  async getClient(id: string) {
    return apiService.get<Client>(`/clients/${id}`);
  },

  async createClient(data: CreateClientInput) {
    return apiService.post<Client>('/clients', data);
  },

  async updateClient(id: string, data: UpdateClientInput) {
    return apiService.patch<Client>(`/clients/${id}`, data);
  },

  async deleteClient(id: string) {
    return apiService.delete<void>(`/clients/${id}`);
  },
};

export default clientsService;
