import { useCallback, useState } from 'react';
import { useApi } from '@deephaven/jsapi-bootstrap';
import type { dh } from '@deephaven/jsapi-types';
import { getSize } from '@deephaven/jsapi-utils';
import useTableListener from './useTableListener';

/**
 * React hook that returns the size of a given table or zero if table is null or
 * undefined. The hook subscribes to the dh.Table.EVENT_SIZECHANGED event and
 * triggers a re-render if any events are received to ensure we have the current
 * size.
 * @param table The table to check the size on.
 */
export function useTableSize(
  table: dh.Table | dh.TreeTable | null | undefined
): number {
  const [, forceRerender] = useState(0);

  const dh = useApi();

  const onSizeChanged = useCallback(() => {
    forceRerender(i => i + 1);
  }, []);

  useTableListener(table, dh.Table.EVENT_SIZECHANGED, onSizeChanged);

  return getSize(table);
}

export default useTableSize;
