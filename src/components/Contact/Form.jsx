const InputField = ({ label, placeholder, type = "text" }) => (
  <div className="w-full">
    <label className="text-main-900 flex flex-col gap-y-4 font-bold md:gap-y-2">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="placeholder:text-subTitle rounded-2xl bg-white px-4 py-2 outline-none placeholder:font-normal"
      />
    </label>
  </div>
);

const TextareaField = ({ label, placeholder }) => (
  <div className="w-full">
    <label className="text-main-900 flex flex-col gap-y-4 font-bold md:gap-y-2">
      {label}
      <textarea
        placeholder={placeholder}
        className="placeholder:text-subTitle h-[100px] resize-none rounded-2xl bg-white px-4 py-2 outline-none placeholder:font-normal"
      />
    </label>
  </div>
);

export default function Form() {
  return (
    <div className="bg-second w-full space-y-[40px] rounded-2xl p-8 md:w-1/2 md:space-y-[76px]">
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
          <InputField label="Name" placeholder="Name" />
          <InputField label="Phone" placeholder="Phone" />
        </div>
        <InputField label="Email" placeholder="Email" type="email" />
        <TextareaField label="Message" placeholder="Write Message..." />
      </form>
    </div>
  );
}
