import type { FC, ReactNode } from 'react';
import Spinner from '@/components/Spinner';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: ReactNode, record: Record<string, ReactNode>, index: number) => ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, ReactNode>[];
  id?: string;
  className?: string;
  emptyText?: ReactNode;
  striped?: boolean;
  bordered?: boolean;
  headerClassName?: string;
  loading?: boolean;
}

const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const DataTable: FC<DataTableProps> = ({
  columns,
  data,
  id,
  className = '',
  emptyText,
  striped = false,
  bordered = true,
  headerClassName,
  loading = false,
}) => {
  return (
    <div className={`bg-background ${bordered ? 'border-2 border-border' : ''} overflow-x-auto relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 z-10 bg-background/80 flex items-center justify-center">
          <Spinner size="lg" className="text-primary" />
        </div>
      )}
      <table
        className="w-full"
        data-sortable=""
        {...(id ? { id } : {})}
      >
        <thead>
          <tr className={headerClassName ?? 'border-b-2 border-border'}>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`${alignClass[col.align ?? 'left']} px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground ${
                  col.sortable ? 'cursor-pointer select-none' : ''
                } ${col.className ?? ''}`}
                {...(col.sortable ? { 'data-sort': col.key } : {})}
                {...(col.width ? { style: { width: col.width } } : {})}
              >
                <span className={`inline-flex items-center gap-1 ${col.align === 'right' ? 'justify-end' : col.align === 'center' ? 'justify-center' : ''}`}>
                  {col.label}
                  {col.sortable && (
                    <svg
                      className="sort-icon w-3 h-3 opacity-30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-16 text-center">
                {emptyText ?? (
                  <p className="font-display font-bold uppercase text-sm text-muted-foreground">
                    No data available
                  </p>
                )}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-border hover:bg-muted/50 transition-colors ${
                  striped && rowIndex % 2 === 1 ? 'bg-muted/30' : ''
                }`}
                data-row={JSON.stringify(row)}
              >
                {columns.map((col) => {
                  const value = row[col.key];
                  const rendered = col.render
                    ? col.render(value, row, rowIndex)
                    : value;

                  return (
                    <td
                      key={col.key}
                      className={`px-6 py-4 text-sm ${alignClass[col.align ?? 'left']} ${col.className ?? ''}`}
                      {...(col.width ? { style: { width: col.width } } : {})}
                    >
                      {rendered}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
