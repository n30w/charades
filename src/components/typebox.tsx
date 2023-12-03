type CustomInputProps = {
  onInputChange: (value: string) => void;
};

const TypeBox: React.FC<CustomInputProps> = ({ onInputChange }) => {
  return (
    <div className="pt-10">
      <label
        htmlFor="url"
        id="typebox-label"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Proxy URL
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          type="text"
          name="url"
          id="url"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-sm"
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TypeBox;
