import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import ChatModal from "./ChatModal";
import FormModal from "./FormModal";

export default function ContactModal({
  isModalOpen,
  handleClose,
}: {
  isModalOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const closeModal = () => {
    handleClose(false);
  };

  return (
    <div className="absolute">
      <ModalBackDrop />
      <div className="flex z-40 fixed inset-0 justify-center items-center">
        <div className="items-end gap-x-[14px] flex flex-row">
          <FormModal /> <ChatModal closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
}

function ModalBackDrop() {
  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="block z-30 fixed inset-0 backgroundblur-10"
      style={{
        background:
          "linear-gradient(to bottom, rgba(241, 244, 249, 0.1), rgba(223, 241, 255, 0.1)))",
      }}
    >
      <section style={{ filter: "blur(150px)" }}>
        <div
          className="absolute w-[700px] h-[400px] left-[300px] top-[100px]"
          style={{ background: "rgba(255, 53, 155, 0.15)" }}
        ></div>
        <div
          className="absolute bottom-[-700px] w-[600px] h-[400px] left-[300px]"
          style={{ background: "rgba(255, 253, 135, 0.2)" }}
        ></div>
        <div
          className="absolute bottom-[-800px] right-[300px] w-[600px] h-[400px]"
          style={{ background: "rgba(0, 210, 255, 0.2)" }}
        ></div>
      </section>
    </motion.div>
  );
}
