
export const TimeHeader = () => {
  return (
    <div className="flex border-b">
      <div className="w-48 flex-shrink-0 border-r p-2 font-medium">
        Véhicules
      </div>
      <div className="flex flex-1 overflow-x-auto">
        {Array.from({ length: 24 }, (_, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-20 border-r px-2 py-2 text-xs text-gray-500 text-center"
          >
            {`${i}:00`}
          </div>
        ))}
      </div>
    </div>
  );
};
