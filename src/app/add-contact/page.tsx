"use client";

import Input from "@/components/Input";
import { addContactValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import uploadImg from "@/../public/upload.png";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email?: string;
  address: string;
};

const AddContact = () => {
  const [previewImg, setPreviewImg] = useState<string | ArrayBuffer | null>(
    null
  );
  const [profileError, setProfileError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(addContactValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    if (!previewImg) {
      setProfileError(true);
    }
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-12 gap-8"
      >
        <div className="col-span-7 space-y-3 order-2 md:order-1">
          <Input
            type="text"
            label="Name"
            placeholder="Enter your name"
            {...register("name")}
            error={errors?.name}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors?.email}
          />
          <Input
            type="text"
            label="Phone"
            placeholder="Enter your email"
            {...register("phone")}
            error={errors?.phone}
          />
          <Input
            type="text"
            label="Address"
            placeholder="Enter your email"
            {...register("address")}
            error={errors?.address}
          />

          <button type="submit" className="w-full py-3 bg-black text-white">
            Submit
          </button>
        </div>
        <div className="col-span-5 order-1 md:order-2">
          <div>
            <label className="block">Upload image</label>
            <div className="h-[230px] relative">
              <Image
                src={uploadImg}
                alt="upload image"
                className="h-full w-full"
              />
              <input
                type="file"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={handleProfileImage}
              />
            </div>
            {profileError && (
              <p className="h-6 text-red-500 text-sm mt-1">
                Profile image is required
              </p>
            )}
          </div>
          {previewImg && (
            <div className="border p-4 rounded-md">
              <Image
                src={previewImg as string}
                alt="preview image"
                width={300}
                height={300}
                className="w-full"
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddContact;
