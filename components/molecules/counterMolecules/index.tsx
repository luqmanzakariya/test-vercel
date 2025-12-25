"use client";
import { useEffect, useRef } from "react";
import { checkPageCounterClient } from "@/utils/api/client/page-counter-client";

const CounterMolecules = ({ id }: { id: string }) => {
  const hasExecutedRef = useRef(false);

  const fetchPageCounter = async () => {
    try {
      await checkPageCounterClient(id);
    } catch (error) {
      console.error("Error fetching page counter:", error);
    }
  };

  useEffect(() => {
    // Only execute if not already executed
    if (!hasExecutedRef.current) {
      hasExecutedRef.current = true;
      fetchPageCounter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default CounterMolecules;
