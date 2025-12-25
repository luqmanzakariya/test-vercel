"use client";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Modal from "@/components/molecules/modal";

import { ModalUpdatePasswordProps } from "./types";
import CardUpdatePasswordAdmin from "@/components/molecules/card/card-update-password-admin";

const ModalUpdatePassword: FC<ModalUpdatePasswordProps> = ({ dict }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathName = usePathname();
  const updateQueryValue = searchParams?.get("update");
  const getIdValue = searchParams?.get("id");
  const [isUpdateOpen, setIsUpdateOpen] = useState(updateQueryValue === "show");

  useEffect(() => {
    setIsUpdateOpen(updateQueryValue === "show");
  }, [updateQueryValue]);

  const onClose = () => {
    router.replace(currentPathName);
  };

  return (
    <Modal visible={isUpdateOpen} onClose={onClose}>
      <CardUpdatePasswordAdmin dict={dict} getIdValue={getIdValue} />
    </Modal>
  );
};

ModalUpdatePassword.displayName = "ModalUpdatePassword";

export default ModalUpdatePassword;
