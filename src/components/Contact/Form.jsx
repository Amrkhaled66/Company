const InputField = ({ label, placeholder, type = "text", bg }) => (
  <div className="w-full">
    <label
      className={`text-main-900 flex flex-col gap-y-4 font-bold md:gap-y-2`}
    >
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className={`placeholder:text-subTitle  !font-normal rounded-2xl bg-white px-4 py-2 outline-none placeholder:font-normal ${bg == "bg-white" && "border-stroke border !bg-[#F4F4F4]"} `}
      />
    </label>
  </div>
);

const TextareaField = ({ label, placeholder, bg }) => (
  <div className="w-full">
    <label className="text-main-900 flex flex-col gap-y-4 font-bold md:gap-y-2">
      {label}
      <textarea
        placeholder={placeholder}
        className={`placeholder:text-subTitle !font-normal border-stroke h-[100px] resize-none rounded-2xl ${bg == "bg-white" && "border-stroke border !bg-[#F4F4F4]"} bg-white px-4 py-2 outline-none placeholder:font-normal`}
      />
    </label>
  </div>
);

export default function Form({ bgColor = "bg-second" }) {
  return (
    <div
      className={`${bgColor} w-full space-y-[40px] rounded-2xl p-8 md:w-1/2 md:space-y-[76px]`}
    >
      {/* Header */}
      <div className="space-y-3">
        <h4 className="text-main-900 text-xl font-bold">
          Fill The Contact Form
        </h4>
        <p className="text-subTitle">
          Feel free to contact with us, we don’t spam your email
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-6">
          <InputField bg={bgColor} label="Name" placeholder="Name" />
          <InputField bg={bgColor} label="Phone" placeholder="Phone" />
        </div>
        <InputField
          bg={bgColor}
          label="Email"
          placeholder="Email"
          type="email"
        />
        <TextareaField
          bg={bgColor}
          label="Message"
          placeholder="Write Message..."
        />
      </form>
    </div>
  );
}
