"use client";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Modal from "@/components/molecules/modal";

import { ModalUpdateStatusProps } from "./types";
import CardUpdateStatus from "@/components/molecules/card/card-update-status";

const ModalUpdateStatus: FC<ModalUpdateStatusProps> = ({ dict, handleRefetch }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathName = usePathname();
  const updateQueryValue = searchParams?.get("update");
  const getIdValue = searchParams?.get("id");
  const getStatusValue = searchParams?.get("status");
  const [isUpdateOpen, setIsUpdateOpen] = useState(updateQueryValue === "show");

  useEffect(() => {
    setIsUpdateOpen(updateQueryValue === "show");
  }, [updateQueryValue]);

  const onClose = () => {
    router.replace(currentPathName);
  };

  return (
    <Modal visible={isUpdateOpen} onClose={onClose}>
      <CardUpdateStatus
        dict={dict}
        getIdValue={getIdValue}
        getStatusValue={getStatusValue}
        handleRefetch={handleRefetch}
      />
    </Modal>
  );
};

ModalUpdateStatus.displayName = "ModalUpdateStatus";

export default ModalUpdateStatus;
