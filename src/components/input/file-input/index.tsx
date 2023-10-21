import { ImUpload } from "react-icons/im";

type FileUploadProps = {
  onChange?: (...args: any[]) => any;
  value?: any;
};

export default function FileUpload(props: FileUploadProps) {
  const { onChange, value } = props;

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file && onChange) {
  //     onChange(file); // Pass the selected file to the parent component
  //   }
  // };
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <label
        className="d-flex flex-column align-items-center justify-content-center w-100 h-64 border border-2 border-primary rounded-lg cursor-pointer"
      >
        <div>
          <ImUpload className="text-primary" size={36} />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center pt-5 pb-6">
          <p className="mb-2 text-sm text-gray-500">
            <span className="fw-Bold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept=".svg, .png, .jpg, .jpeg, .gif"
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}
