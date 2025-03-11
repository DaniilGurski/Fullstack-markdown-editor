import { robotoSlab } from "@/app/fonts";
import React, { forwardRef, Ref } from "react";
import Button from "@/app/components/buttons/Button";

type TModalProps = {
  title: string;
  body: string;
  confirmButtonText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

function ConfirmModal(
  {
    title,
    body,
    confirmButtonText = "Confirm",
    onConfirm,
    onCancel,
  }: TModalProps,
  ref: Ref<HTMLDialogElement>,
) {
  const onDialogClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onCancel();
  };

  return (
    <dialog
      className="backdrop:bg-modal-backdrop/40 fixed top-[50%] mx-auto w-full max-w-96 translate-y-[-50%] rounded-sm bg-neutral-100 p-6"
      onClick={onDialogClick}
      ref={ref}
    >
      <div className="grid gap-y-4">
        <h2
          className={`${robotoSlab.className} text-xl font-bold text-neutral-700`}
        >
          {title}
        </h2>
        <p className={`${robotoSlab.className} text-sm text-neutral-500`}>
          {body}
        </p>

        <div className="grid grid-cols-2 gap-x-2">
          <Button onClick={onConfirm}> {confirmButtonText} </Button>
          <Button onClick={onCancel}> Cancel </Button>
        </div>
      </div>
    </dialog>
  );
}

export default forwardRef(ConfirmModal);
