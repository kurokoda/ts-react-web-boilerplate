import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire";

import { DatabaseQueryResult } from "../../../type";

export const useExample = (): DatabaseQueryResult => {
  const [value, setValue] = useState<any | null>(null);

  const col = collection(useFirestore(), "test");

  const { data, status } = useFirestoreCollectionData(col);

  useEffect(() => {
    if (data) {
      setValue(data);
    }
  }, [data]);

  return [value, status];
};
