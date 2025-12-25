"use client";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Modal from "@/components/molecules/modal";

import { ModalBusinessValuationProps } from "./types";
import BusinessCalculator from "@/components/molecules/businessCalculator";

const ModalBusinessValuation: FC<ModalBusinessValuationProps> = ({ dict }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathName = usePathname();
  const valuationQueryValue = searchParams?.get("valuation");
  const [isUpdateOpen, setIsUpdateOpen] = useState(valuationQueryValue === "show");

  useEffect(() => {
    setIsUpdateOpen(valuationQueryValue === "show");
  }, [valuationQueryValue]);

  const onClose = () => {
    router.replace(currentPathName);
  };

  return (
    <Modal visible={isUpdateOpen} onClose={onClose}>
      <BusinessCalculator dict={dict} />
    </Modal>
  );
};

ModalBusinessValuation.displayName = "ModalBusinessValuation";

export default ModalBusinessValuation;
