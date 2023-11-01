import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupAPI } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success("User suscessfully created! Please verify the sent email.");
    },
  });
  return { signup, isLoading };
}
