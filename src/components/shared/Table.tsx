import type { ReactNode } from 'react';
import { useState, useMemo, useCallback, memo } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

/**
 * Table column definition
 */
export interface Column<T> {
  key: string;
  label: ReactNode;
  sortable?: boolean;
  render?: (value: any, record: T, index: number) => ReactNode;
  width?: string | number;
  hidden?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig<T> {
  key: keyof T | string;
  direction: SortDirection;
}

export interface PaginationConfig {
  current: number;
  pageSize: number;
  total: number;
  onChange?: (page: number, pageSize: number) => void;
}

export interface TableProps<T extends Record<string, any>> extends ClassNameProps {
  columns: Column<T>[];
  data: T[];
  rowKey?: keyof T | string;
  selectable?: boolean;
  selectedRowKeys?: (string | number)[];
  onSelectionChange?: (selectedKeys: (string | number)[]) => void;
  sortable?: boolean;
  sortConfig?: SortConfig<T>;
  onSortChange?: (config: SortConfig<T>) => void;
  pagination?: PaginationConfig | boolean;
  isLoading?: boolean;
  emptyText?: ReactNode;
  rowClassName?: string | ((record: T, index: number) => string);
  onRowClick?: (record: T, index: number) => void;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  caption?: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const cellPadding = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-6 py-4',
};

export function Table<T extends Record<string, any>>({
  columns,
  data,
  rowKey = 'id' as keyof T,
  selectable = false,
  selectedRowKeys = [],
  onSelectionChange,
  sortable = true,
  sortConfig,
  onSortChange,
  pagination,
  isLoading = false,
  emptyText = 'No data',
  rowClassName,
  onRowClick,
  striped = false,
  hoverable = true,
  bordered = false,
  caption,
  footer,
  size = 'md',
  className,
}: TableProps<T>) {
  const [internalSortConfig, setInternalSortConfig] = useState<SortConfig<T> | null>(null);
  const [internalPagination, setInternalPagination] = useState<PaginationConfig | null>(
    pagination && typeof pagination === 'object'
      ? pagination
      : pagination
      ? { current: 1, pageSize: 10, total: data.length }
      : null
  );

  const activeSortConfig = sortConfig || internalSortConfig;

  const sortedData = useMemo(() => {
    if (!activeSortConfig || !activeSortConfig.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[activeSortConfig.key as keyof T];
      const bValue = b[activeSortConfig.key as keyof T];

      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      const comparison = aValue < bValue ? -1 : 1;
      return activeSortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, activeSortConfig]);

  const paginatedData = useMemo(() => {
    if (!internalPagination) return sortedData;

    const start = (internalPagination.current - 1) * internalPagination.pageSize;
    const end = start + internalPagination.pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, internalPagination]);

  const handleSort = useCallback(
    (key: string) => {
      if (!sortable) return;

      const newConfig: SortConfig<T> = {
        key,
        direction:
          activeSortConfig?.key === key
            ? activeSortConfig.direction === 'asc'
              ? 'desc'
              : activeSortConfig.direction === 'desc'
              ? null
              : 'asc'
            : 'asc',
      };

      if (onSortChange) {
        onSortChange(newConfig);
      } else {
        setInternalSortConfig(newConfig);
      }
    },
    [sortable, activeSortConfig, onSortChange]
  );

  const handleRowSelect = useCallback(
    (key: string | number) => {
      if (!onSelectionChange) return;

      const newSelected = selectedRowKeys.includes(key)
        ? selectedRowKeys.filter((k) => k !== key)
        : [...selectedRowKeys, key];

      onSelectionChange(newSelected);
    },
    [selectedRowKeys, onSelectionChange]
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (!onSelectionChange) return;

      if (checked) {
        onSelectionChange(paginatedData.map((row) => String(row[rowKey])));
      } else {
        onSelectionChange([]);
      }
    },
    [paginatedData, rowKey, onSelectionChange]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (!internalPagination) return;

      const newPagination = { ...internalPagination, current: page };
      setInternalPagination(newPagination);
      internalPagination.onChange?.(page, internalPagination.pageSize);
    },
    [internalPagination]
  );

  const getRowKey = useCallback(
    (record: T): string | number => {
      const key = record[rowKey as keyof T];
      return typeof key === 'object' ? JSON.stringify(key) : key;
    },
    [rowKey]
  );

  const allSelected = useMemo(() => 
    paginatedData.length > 0 && 
    paginatedData.every((row) => selectedRowKeys.includes(getRowKey(row))),
    [paginatedData, selectedRowKeys, getRowKey]
  );

  const renderSortIcon = useCallback((column: Column<T>) => {
    if (!column.sortable || !sortable) return null;

    const isActive = activeSortConfig?.key === column.key;
    const direction = isActive ? activeSortConfig?.direction : null;

    return (
      <span className="inline-flex flex-col ml-1">
        <svg
          className={cn(
            'w-3 h-3',
            direction === 'asc' ? 'text-primary' : 'text-on-surface-variant/50'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 15.707a1 1 0 010-1.414L10 9.586l4.707 4.707a1 1 0 11-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414 0z" />
        </svg>
        <svg
          className={cn(
            'w-3 h-3 -mt-1',
            direction === 'desc' ? 'text-primary' : 'text-on-surface-variant/50'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 4.293a1 1 0 010 1.414L10 10.414l-4.707-4.707a1 1 0 011.414-1.414L10 7.586l3.293-3.293a1 1 0 011.414 0z" />
        </svg>
      </span>
    );
  }, [activeSortConfig, sortable]);

  const getRowClassName = useCallback(
    (record: T, index: number): string => {
      const classes: string[] = [];
      const key = getRowKey(record);

      if (selectedRowKeys.includes(key)) {
        classes.push('bg-primary/10');
      }

      if (striped && index % 2 === 1) {
        classes.push('bg-surface-container-low/50');
      }

      if (hoverable && !isLoading) {
        classes.push('hover:bg-surface-container-high');
      }

      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName(record, index));
      }

      return cn('transition-colors duration-150', ...classes);
    },
    [selectedRowKeys, striped, hoverable, isLoading, rowClassName, getRowKey]
  );

  if (isLoading && data.length === 0) {
    return (
      <div className={cn('flex items-center justify-center p-8', className)}>
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="overflow-x-auto rounded-lg border border-outline-variant">
        <table
          className={cn(
            'w-full',
            'ubuntu',
            sizeStyles[size],
            bordered && 'border-collapse'
          )}
        >
          {caption && <caption className="sr-only">{caption}</caption>}

          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              {selectable && (
                <th className={cn('px-4 py-3 text-left', cellPadding[size])}>
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-outline-variant text-primary focus:ring-primary"
                    aria-label="Select all rows"
                  />
                </th>
              )}

              {columns
                .filter((col) => !col.hidden)
                .map((column) => (
                  <th
                    key={column.key}
                    className={cn(
                      'px-4 py-3 text-left font-medium text-on-surface-variant',
                      'syne',
                      cellPadding[size],
                      column.sortable && sortable && 'cursor-pointer hover:text-on-surface',
                      column.align === 'center' && 'text-center',
                      column.align === 'right' && 'text-right',
                      column.className
                    )}
                    style={{ width: column.width }}
                    onClick={() => handleSort(column.key)}
                  >
                    <div className={cn('flex items-center', column.align === 'center' && 'justify-center', column.align === 'right' && 'justify-end')}>
                      {column.label}
                      {renderSortIcon(column)}
                    </div>
                  </th>
                ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/30">
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={selectable ? columns.length + 1 : columns.length}
                  className={cn('px-4 py-8 text-center text-on-surface-variant', cellPadding[size])}
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              paginatedData.map((record, index) => {
                const key = getRowKey(record);
                return (
                  <tr
                    key={key}
                    className={cn(getRowClassName(record, index))}
                    onClick={() => onRowClick?.(record, index)}
                    role={onRowClick ? 'button' : undefined}
                    tabIndex={onRowClick ? 0 : undefined}
                  >
                    {selectable && (
                      <td className={cn('px-4', cellPadding[size])}>
                        <input
                          type="checkbox"
                          checked={selectedRowKeys.includes(key)}
                          onChange={() => handleRowSelect(key)}
                          className="rounded border-outline-variant text-primary focus:ring-primary"
                          aria-label={`Select row ${index + 1}`}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                    )}

                    {columns
                      .filter((col) => !col.hidden)
                      .map((column) => (
                        <td
                          key={column.key}
                          className={cn(
                            'px-4 text-on-surface',
                            cellPadding[size],
                            column.align === 'center' && 'text-center',
                            column.align === 'right' && 'text-right',
                            column.className
                          )}
                        >
                          {column.render
                            ? column.render(record[column.key as keyof T], record, index)
                            : String(record[column.key as keyof T] ?? '')}
                        </td>
                      ))}
                  </tr>
                );
              })
            )}
          </tbody>

          {footer && (
            <tfoot>
              <tr className="bg-surface-container-low border-t border-outline-variant">
                <td
                  colSpan={selectable ? columns.length + 1 : columns.length}
                  className={cn('px-4 py-3', cellPadding[size])}
                >
                  {footer}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {internalPagination && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-on-surface-variant ubuntu">
            Showing {(internalPagination.current - 1) * internalPagination.pageSize + 1} to{' '}
            {Math.min(internalPagination.current * internalPagination.pageSize, internalPagination.total)} of{' '}
            {internalPagination.total} results
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(internalPagination.current - 1)}
              disabled={internalPagination.current === 1}
              className={cn(
                'px-3 py-1.5 rounded-lg border border-outline-variant',
                'text-sm font-medium',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'hover:bg-surface-container-high',
                'transition-colors'
              )}
              aria-label="Previous page"
            >
              Previous
            </button>

            {Array.from(
              { length: Math.ceil(internalPagination.total / internalPagination.pageSize) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  'px-3 py-1.5 rounded-lg border',
                  'text-sm font-medium',
                  'transition-colors',
                  internalPagination.current === page
                    ? 'bg-primary text-on-primary border-primary'
                    : 'border-outline-variant hover:bg-surface-container-high'
                )}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(internalPagination.current + 1)}
              disabled={internalPagination.current * internalPagination.pageSize >= internalPagination.total}
              className={cn(
                'px-3 py-1.5 rounded-lg border border-outline-variant',
                'text-sm font-medium',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'hover:bg-surface-container-high',
                'transition-colors'
              )}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Table);
