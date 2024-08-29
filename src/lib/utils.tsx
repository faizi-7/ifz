import { UploadFile } from "@mui/icons-material";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
interface UploadButtonProps {
  setThumbnail: (url: string) => void;
}

export default function UploadButton({ setThumbnail }: UploadButtonProps) {
  let preset = process.env.NEXT_PUBLIC_CLD_UPLOAD_PRESET || "";
  console.log(preset);
  return (
    <CldUploadWidget
      uploadPreset={preset}
      options={{ sources: ["local", "url"] }}
      onSuccess={(result) => {
        if (typeof result.info === "object" && result.info !== null) {
          const url = (result.info as CloudinaryUploadWidgetInfo).secure_url;
          console.log(url);
          if (url) {
            setThumbnail(url.toString());
          } else {
            console.error("Upload failed or no URL returned.");
          }
        } else {
          console.error("Unexpected result type:", typeof result.info);
        }
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => (
        <button onClick={() => open()} className="button">
          Upload the Project Image <UploadFile />
        </button>
      )}
    </CldUploadWidget>
  );
}
