import { toast } from "sonner";
import { CheckCircleIcon } from "../../../assets/icons/CheckCircleIcon";

function toastSuccess(message?: string, description?: string) {
  toast.success(message, {
    description: description,
    duration: 3000,
    unstyled: true,
    icon: <CheckCircleIcon />,
    classNames: {
      toast: "flex w-96 gap-5 items-center bg-green-500 p-3 rounded-xl text-white",
      title: 'text-gray-50 font-medium',
      description: 'text-white'
    }
  });
}

export function useToast() {
  const toast = {
    success: toastSuccess
  }

  return {
    toast
  }
}
