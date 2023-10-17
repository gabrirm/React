import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("cabins could not be loaded");
    throw new Error("cabins could not be laoded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //variable to check wether the user updated the image field or not
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://psoybfzotmmpbgfcbtae.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-10-16T17%3A04%3A19.326Z
  // upload cabin
  let query = supabase.from("cabins");

  // CREATE CABIN
  if (!id)
    // register(names) on the form must be the same as the column names on supabase
    query = query.insert([{ ...newCabin, image: imagePath }]);

  // EDIT CABIN
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log("cabin could not be created");
    throw new Error("cabin could not be created");
  }
  //upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  // if there is an error uploading the image, deleted the created cabin
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin could not be deleted");
  return data;
}
