// ImageUpload.js
"use client"
import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const uploadPreset = "tffpd7m4";

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback((result) => {
    if (result.info) {
      onChange(result.info.secure_url);
    }
  }, [onChange]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          
        >
          <div className="w-[88] flex items-center justify-center shadow-md border p-4 h-[19px] rounded-[88px] bg-[#F0EFFA]">
                        <button >Upload Button</button>
                       </div>
          
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
