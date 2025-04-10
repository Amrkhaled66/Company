const Map = [
  {
    title: "Quick Links",
    elements: ["About Us", "Our Team", "Blogs", "Contact Us"],
  },
  {
    title: "Services",
    elements: [
      "Cyber Security Solutions",
      "Digital Marketing Services",
      "UI/UX & Branding Identity",
      "IT Management Service",
    ],
  },
  {
    title: "Information",
    elements: ["Services", "Privacy Policy", "Terms & Conditions", "Faqs"],
  },
];

export default function SiteMap() {
  return (
    <div className="flex flex-1 flex-col justify-between gap-y-8 lg:flex-row">
      {Map.map((item, index) => (
        <div key={index} className="space-y-[28px]">
          <h4 className="text-xl font-bold">{item.title}</h4>
          <div className="space-y-[20px]">
            {item.elements.map((element, index) => (
              <p key={index} className="cursor-pointer hover:underline">
                {element}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
