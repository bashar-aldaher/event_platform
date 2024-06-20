"use server";

import { connectToDatabase } from "@/lib/database";
import Category from "../database/models/category.model";
import { handleError } from "@/lib/utils";

import { CreateCategoryParams } from "@/types";

export async function createCategory({ categoryName }: CreateCategoryParams) {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });
    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
}

export async function getAllCategories() {
  try {
    await connectToDatabase();

    const caregories = await Category.find();

    if (!caregories) throw new Error("caregories not found");
    return JSON.parse(JSON.stringify(caregories));
  } catch (error) {
    handleError(error);
  }
}
