// hooks/useApi.ts
import { useState, useContext } from "react";
import { AxiosRequestConfig } from "axios";
import API from "@/utils/api";
import { AuthContext } from "@/context/AuthContext";

export function useApi<T = any>() {
  const { accessToken } = useContext(AuthContext);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const callApi = async <R = T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<R | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await API.request({
        url,
        ...config,
        headers: {
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
          "Content-Type": "application/json",
          ...(config.headers || {}),
        },
      });

      setData(res.data);
      return res.data;
    } catch (err: any) {
      console.error("API Error:", err.response?.data || err);
      setError(err?.response?.data?.detail || "Something went wrong");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, callApi };
}
