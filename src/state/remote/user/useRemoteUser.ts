import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

import { DatabaseQueryResult } from "../../../type";

export const useRemoteUser = (uuid:string): DatabaseQueryResult => {
  const [value, setValue] = useState<any | null>(null);

  const testData = doc(useFirestore(), "user", uuid);

  const { data, status } = useFirestoreDocData(testData);

  useEffect(() => {
    if (data) {
      setValue(data);
    }
  }, [data]);

  return [value, status];
};
