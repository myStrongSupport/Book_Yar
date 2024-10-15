"use server";

import { revalidatePath } from "next/cache";

export async function refresh(params) {
  revalidatePath("/challange");
}
