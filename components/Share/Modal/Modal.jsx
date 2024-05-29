import { useClickAway } from "@uidotdev/usehooks";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, closeModal, children, title }) => {
  const modalRef = useClickAway(() => {
    closeModal();
  });

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    // exit: {
    //   opacity: 0,
    //   scale: 0.75,
    //   transition: {
    //     duration: 0.3,
    //   },
    // },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          // exit="exit"
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
        >
          <motion.div
            className="w-[90%] min-w-[300px] max-w-5xl bg-white text-black rounded-lg z-[60] modal-content  mx-auto max-h-[80vh] overflow-y-auto"
            variants={modalVariants}
          >
            <div className="flex justify-between bg-[#F1F3F7] p-5">
              <h2 className="text-[18px] font-[500]">{title}</h2>
              <button onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 19L19 6"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L6 6"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
