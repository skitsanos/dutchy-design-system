import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Pagination from '@/components/Pagination';

const PaginationPage: FC = () => (
  <ComponentPageLayout componentId="pagination">
    <>
      <div className="space-y-12">
        {/* Standard */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Standard</h3>
          <Pagination currentPage={2} totalPages={5} baseUrl="#pagination" />
        </div>

        {/* With Ellipsis */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">With Ellipsis</h3>
          <Pagination currentPage={7} totalPages={20} baseUrl="#pagination" />
        </div>

        {/* Compact */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Compact</h3>
          <Pagination currentPage={3} totalPages={12} baseUrl="#pagination" variant="compact" />
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default PaginationPage;
