const AmenitiesCheckbox = ({ amenities, label }: { amenities: string; label: string[] }) => {
  return (
    <>
      <div className="font-bold mb-5">{amenities.toUpperCase()}</div>
      <div className="grid grid-cols-2 justify-items-stretch gap-4 mb-2">
        {label &&
          label.map((item, idx) => (
            <div className="flex items-center" key={idx}>
              <input className="mr-2" type="checkbox" />
              <label className="text-[14px]">{item}</label>
            </div>
          ))}
      </div>
    </>
  );
};

export default AmenitiesCheckbox;
