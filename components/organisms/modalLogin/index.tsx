"use client";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Modal from "@/components/molecules/modal";
import LoginCard from "../../molecules/card/login-card";

import { ModalLoginProps } from "./types";

const ModalLogin: FC<ModalLoginProps> = ({ dict }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathName = usePathname();
  const loginQueryValue = searchParams?.get("login");
  const [isLoginOpen, setIsLoginOpen] = useState(loginQueryValue === "show");

  useEffect(() => {
    setIsLoginOpen(loginQueryValue === "show");
  }, [loginQueryValue]);

  const onClose = () => {
    router.replace(currentPathName);
  };

  return (
    <Modal visible={isLoginOpen} onClose={onClose}>
      <LoginCard dict={dict} />
    </Modal>
  );
};

ModalLogin.displayName = "ModalLogin";

export default ModalLogin;
