import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginAPI } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Logged in successfully");
      setTimeout(() => navigate("/dashboard", { replace: true }), 2000);
    },
    onError: (err) => {
      toast.error("Invalid credentials");
    },
  });
  return { login, isLoading };
}
