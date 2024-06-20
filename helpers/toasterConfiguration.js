import { toast } from "react-toastify";
export const successToaster = (message) =>
  toast.success(message || "Process successfully done", {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    color: "#e3e3e3",
  });
export const errorToaster = (message) =>
  toast.error(message || "Process Failed!", {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
