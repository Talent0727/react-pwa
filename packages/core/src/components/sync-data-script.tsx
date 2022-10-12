import serialize from 'serialize-javascript';
import { FC, useEffect, useState } from 'react';

export const SyncDataScript: FC<{ id: string; data: any }> = ({ id, data }) => {
  const disableSyncScript = typeof document !== 'undefined' && document.readyState === 'complete';
  const [disableRenderScript, setDisableRenderScript] = useState(disableSyncScript);
  useEffect(() => {
    setDisableRenderScript(true);
  }, []);
  if (disableRenderScript) {
    return null;
  }
  return (
    <script
      type="template/x-sync-data"
      data-sync-id={id}
      dangerouslySetInnerHTML={{
        __html: serialize(data),
      }}
    />
  );
};
