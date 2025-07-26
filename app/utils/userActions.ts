"use server";
import axios from "axios";
import { auth } from "@/auth";
import apiClient from "./apiClient";

export async function fetchUserData() {
  const session = await auth();
  if (session?.user) {
    try {
      const { data: user } = await apiClient.get(
        `/api/user/${session.user.id}`
      );
      return user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
      } else {
        console.error("Error:", error);
      }
      throw new Error("Failed to fetch user data");
    }
  }
}
