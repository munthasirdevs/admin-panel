/**
 * API related types
 */

import type { ApiResponse, ApiError, PaginatedResponse, PaginationParams } from './index';

export type {
  ApiResponse,
  ApiError,
  PaginatedResponse,
  PaginationParams,
};

// Request options
export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  signal?: AbortSignal;
}

// API client configuration
export interface ApiClientConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}
