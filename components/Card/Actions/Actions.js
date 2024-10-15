"use client";
import { usePathname } from "next/navigation";
import React from "react";
import ReadAction from "./ReadActions";
import BeingReadAction from "./BeingReadAction";
import MainAction from "./MainAction";
import ChallangeAction from "./ChallangeActions";

const Actions = ({ page, book }) => {
  const path = usePathname();
  let buttons;

  if ((path === "/bookshelf" && !page) || path === "/") {
    buttons = <BeingReadAction book={book} />;
  } else if (path === "/library") {
    buttons = <MainAction book={book} />;
  } else if (path === "/challange") {
    buttons = <ChallangeAction book={book} />;
  } else if (page === "/bookisread") {
    buttons = <ReadAction book={book} />;
  }

  return <>{buttons}</>;
};

export default Actions;
