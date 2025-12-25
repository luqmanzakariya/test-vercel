const Divider = () => {
  return (
    <div className="relative flex items-center">
      <div className="flex-1 border-t-2 border-black"></div>
      <div className="mx-2 flex space-x-1">
        <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>
      <div className="flex-1 border-t-2 border-black"></div>
    </div>
  );
};

export default Divider;
