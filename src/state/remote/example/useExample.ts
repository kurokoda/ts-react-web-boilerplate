import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

import { DatabaseQueryResult } from "../../../type";

export const useExample = (): DatabaseQueryResult => {
  const [value, setValue] = useState<any | null>(null);

  const testData = doc(useFirestore(), "test", "1");

  const { data, status } = useFirestoreDocData(testData);

  useEffect(() => {
    if (data) {
      console.log("Ian : data", data);
      setValue(data);
    }
  }, [data]);

  return [value, status];
};
