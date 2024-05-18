"use client";
import ModalVerifiy from "./ModalVerify";

import { easeInOut, motion, AnimatePresence } from "framer-motion";
export default function Backdrop({ onButtonClick }) {
  return (
    <>
      <motion.div
        className="fixed inset-0  bg-black bg-opacity-50 backdrop-blur-md z-999"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
      >
        <ModalVerifiy onButtonClick={onButtonClick} />
      </motion.div>
    </>
  );
}
